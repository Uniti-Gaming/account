import { Dispatch, SetStateAction, useCallback, useContext, useMemo, useState } from 'react';
import { useLoaderData, useOutletContext } from 'react-router-dom';

import { VerifiedUserContext } from '@/core/contexts/VerifiedUserContext';
import { ITariffPopup, TariffPopupContext } from '@/core/contexts/TariffPopupContext';
import { IBalance, ICurrentTariff, ISubscribeDetails, ITransaction, IVerification } from '@interfaces/userInterface';
import { applyPromocode, getBalance, getCurrentTariff } from '@services/userService';
import { activateTariff, getTariff } from '@/core/services/managementService';

import Deposit from '@/components/Deposit/Deposit';
import InfoMessages from '@/components/InfoMessages/InfoMessages';
import { TariffPopup } from '../Tariff';
import History from './components/History/History';
import PromoCode from './components/PromoCode/PromoCode';
import Safety from './components/Safety/Safety';
import TariffBlock from './components/TariffBlock/TariffBlock';
import UserInfo from './components/UserInfo/UserInfo';

interface ReviewLoaderData {
  verification: IVerification;
  balance: IBalance;
  transactions: ITransaction[];
  tariff: ISubscribeDetails[];
  currentTariff: ICurrentTariff
}

const Review = () => {
  const { verification, balance, transactions, tariff, currentTariff } = useLoaderData() as ReviewLoaderData;
  const {currentUser} = useContext(VerifiedUserContext);
  const titleRef = useOutletContext() as React.RefObject<HTMLHeadingElement>;
  titleRef.current ? titleRef.current.textContent = 'Обзор учётной записи' : null;
  const [promocodeIsLoading, setPromocodeIsLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState({balance, tariff, currentTariff});
  const [popup, setPopup] = useState<ITariffPopup | null>(null);
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

  const handleError = async (error: unknown) => {
    if (error instanceof Response) {
      const errorData = await error.json();
      addInfoMessage(errorData);
    } else {
      addInfoMessage({ message: 'Что-то пошло не так', success: false });
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const handleSubmitPromocode = (code: string) => {
    setPromocodeIsLoading(true);
    applyPromocode(code)
      .then((res) => {
        addInfoMessage(res);
        getBalance()
          .then((res) => setUserData({ ...userData, balance: res }));
      })
      .catch(handleError)
      .finally(() => setPromocodeIsLoading(false));
  };

  const openPopup: Dispatch<SetStateAction<ITariffPopup | null>> = useCallback((data) => {
    setPopup(data);
  }, []);

  const contextValue = useMemo(() => ({
    openPopup,
    popup,
  }), [popup, openPopup]);
  
  const handleactivateTariff = (id: number) => {
    setIsLoading(true);
    activateTariff({id, month: 1})
      .then((res) => {
        Promise.all([getTariff(), getBalance(), getCurrentTariff()])
          .then(([tariff, balance, currentTariff]) => {
            setUserData({ tariff, balance, currentTariff });
            setPopup(null);
            addInfoMessage(res);
          })
          .catch((err) => { throw err; });
      })
      .catch(handleError)
      .finally(() => setIsLoading(false));
  };

  return (
    <TariffPopupContext.Provider value={contextValue}>
      {infoMessagesList.length > 0 && (<InfoMessages items={infoMessagesList} />)}
      <Safety safety={verification} />
      <PromoCode handleSubmit={handleSubmitPromocode} isLoading={promocodeIsLoading} />
      <Deposit balance={userData.balance} />
      <UserInfo currentUser={currentUser} />
      <TariffBlock tariff={tariff} handleactivateTariff={handleactivateTariff} currentTariff={userData.currentTariff} />
      <TariffPopup isLoading={isLoading} />
      <History transactions={transactions instanceof Array ? transactions.slice(0, 3) : []} />
    </TariffPopupContext.Provider>
  );
};

export default Review;