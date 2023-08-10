import { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import { ITariffPopup, TariffPopupContext } from '@/core/contexts/TariffPopupContext';

import CurrentTariff from './components/CurrentTariff/CurrentTariff';
import TariffCatalog from './components/TariffCatalog/TariffCatalog';
import TariffPopup from './components/TariffPopup/TariffPopup';
import Key from './components/Key/Key';


const Tariff = () => {
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
      <Key />
      <CurrentTariff isActive={true} />
      <TariffCatalog />
      <TariffPopup />
    </TariffPopupContext.Provider>
  );
};

export default Tariff;