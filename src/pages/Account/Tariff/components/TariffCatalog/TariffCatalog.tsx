import { FC } from 'react';

import { ISubscribeDetails } from '@interfaces/userInterface';
import styles from './TariffCatalog.module.scss';

import TariffCard from '../TariffCard/TariffCard';

interface TariffCatalogProps {
  tariffArray: ISubscribeDetails[];
  handleactivateTariff: (data: { id: number, month: number }) => void;
}

const TariffCatalog: FC<TariffCatalogProps> = ({tariffArray, handleactivateTariff}) => {
  return (
    <div className={styles.catalog}>
      {tariffArray.map((tariff) => (
        <TariffCard
          key={tariff.subscribe_id}
          tariff={tariff}
          handleactivateTariff={handleactivateTariff}
        />
      ))}
    </div>
  );
};

export default TariffCatalog;