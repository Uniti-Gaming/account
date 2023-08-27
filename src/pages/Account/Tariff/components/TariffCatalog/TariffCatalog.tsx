import { FC } from 'react';

import { ITariff } from '@interfaces/userInterface';
import styles from './TariffCatalog.module.scss';

import TariffCard from '../TariffCard/TariffCard';

interface TariffCatalogProps {
  tariff: ITariff;
}
const TariffCatalog: FC<TariffCatalogProps> = ({tariff}) => {
  return (
    <div className={styles.catalog}>
      {tariff.subscriptions.map((tariff) => (
        <TariffCard
          key={tariff.subscribe_id}
          {...tariff}
        />
      ))}
    </div>
  );
};

export default TariffCatalog;