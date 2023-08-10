import { tariffData } from './tariffData';
import styles from './TariffCatalog.module.scss';

import TariffCard from '../TariffCard/TariffCard';

const TariffCatalog = () => {
  return (
    <div className={styles.catalog}>
      {tariffData.map((tariff, index) => (
        <TariffCard key={index} {...tariff}/>
      ))}
    </div>
  );
};

export default TariffCatalog;