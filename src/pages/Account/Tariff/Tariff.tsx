import { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react';
import { useLoaderData, useOutletContext } from 'react-router-dom';

import { ITariffPopup, TariffPopupContext } from '@/core/contexts/TariffPopupContext';
import { IBalance, ICurrentTariff, ISubscribeDetail, IUserKeys } from '@interfaces/userInterface';

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

  useEffect(() => {
    titleRef.current ? titleRef.current.textContent = 'Тарифы и Ключи' : null;
  }, [titleRef]);

  const [popup, setPopup] = useState<ITariffPopup | null>(null);

  const openPopup: Dispatch<SetStateAction<ITariffPopup | null>> = useCallback((data) => {
    setPopup(data);
  }, []);

  const contextValue = useMemo(() => ({
    openPopup,
    popup,
  }), [popup, openPopup]);

  return (
    <TariffPopupContext.Provider value={contextValue}>
      <Key keys={keys} />
      {currentTariff.active_subscribe && (
        <CurrentTariff
          date={currentTariff.expiry_date || ''}
          tariff={tariff.find(item => item.subscribe_id == currentTariff.active_subscribe)}
        />
      )}
      <Deposit balance={balance} />
      <TariffCatalog tariff={tariff} />
      <TariffPopup />
    </TariffPopupContext.Provider>
  );
};

export default Tariff;