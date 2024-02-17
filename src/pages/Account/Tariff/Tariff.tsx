import { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react';
import { useLoaderData, useOutletContext } from 'react-router-dom';

import { ITariffPopup, TariffPopupContext } from '@/core/contexts/TariffPopupContext';
import { IBalance, ICurrentTariff, ISubscribeDetail, IUserKeys } from '@interfaces/userInterface';
import { activateTariff } from '@services/managementService';
import { getBalance, getCurrentTariff } from '@services/userService';

import InfoMessages from '@/components/InfoMessages/InfoMessages';
import Deposit from '@/components/Deposit/Deposit';
import CurrentTariff from './components/CurrentTariff/CurrentTariff';
import TariffCatalog from './components/TariffCatalog/TariffCatalog';
import TariffPopup from './components/TariffPopup/TariffPopup';
import Key from './components/Key/Key';

interface ILoaderData {
  tariff: ISubscribeDetail[];
  keys: IUserKeys;
  currentTariff: ICurrentTariff;
  balance: IBalance;
}

const Tariff = () => {
  const { tariff, keys, currentTariff, balance } = useLoaderData() as ILoaderData;
  const titleRef = useOutletContext() as React.RefObject<HTMLHeadingElement>;
  const [popup, setPopup] = useState<ITariffPopup | null>(null);
  const [userData, setUserData] = useState({ currentTariff, balance });
  const [isLoading, setIsLoading] = useState(false);
  const [infoMessagesList, setInfoMessagesList] = useState<{ message: string, success: boolean }[]>([]);

  const addInfoMessage = (data: { message: string, success: boolean }) => {
    setInfoMessagesList([...infoMessagesList, data]);
    setTimeout(() => {
      setInfoMessagesList(prevInfoMessagesList =>
        prevInfoMessagesList.filter(message => message !== data),
      );
    }, 5000);
  };

  useEffect(() => {
    titleRef.current ? titleRef.current.textContent = 'Тарифы и Ключи' : null;
  }, [titleRef]);


  const openPopup: Dispatch<SetStateAction<ITariffPopup | null>> = useCallback((data) => {
    setPopup(data);
  }, []);

  const handleactivateTariff = (data: { id: number, month: number }) => {
    setIsLoading(true);
    activateTariff(data)
      .then((res) => {
        Promise.all([getCurrentTariff(), getBalance()])
          .then(([currentTariff, balance]) => {
            setUserData({ currentTariff, balance });
            setPopup(null);
            addInfoMessage(res);
          })
          .catch((err) => { throw err; });
      })
      .catch(async (error) => {
        if (error instanceof Response) {
          const errorData = await error.json();
          addInfoMessage(errorData);
        } else {
          addInfoMessage({ message: 'Что-то пошло не так', success: false });
          // eslint-disable-next-line no-console
          console.log(error);
        }
      })
      .finally(() => setIsLoading(false));
  };

  const contextValue = useMemo(() => ({
    openPopup,
    popup,
  }), [popup, openPopup]);

  return (
    <TariffPopupContext.Provider value={contextValue}>
      {infoMessagesList.length > 0 && (<InfoMessages items={infoMessagesList} />)}
      <Key keys={keys} />
      {userData.currentTariff.active_subscribe && (
        <CurrentTariff
          date={userData.currentTariff.expiry_date || ''}
          tariff={tariff.find(item => item.subscribe_id == userData.currentTariff.active_subscribe)}
        />
      )}
      <Deposit balance={userData.balance} />
      <TariffCatalog tariffArray={tariff} handleactivateTariff={handleactivateTariff} />
      <TariffPopup isLoading={isLoading} />
    </TariffPopupContext.Provider>
  );
};

export default Tariff;