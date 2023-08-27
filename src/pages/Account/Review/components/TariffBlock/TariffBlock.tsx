import { FC } from 'react';

import { ITariff } from '@interfaces/userInterface';
import styles from './TariffBlock.module.scss';

import LayoutBlock from '@/components/LayoutBlock/LayoutBlock';
import Tariff from '../Tariff/Tariff';

interface TariffBlockProps {
  tariff: ITariff;
}

const TariffBlock: FC<TariffBlockProps> = ({ tariff }) => {

  return (
    <LayoutBlock
      title='Тарифы'
      link={{
        text: 'Ключи и Тарифы >',
        path: '/tariff',
      }}>
      <div className={styles.body}>
        {tariff.subscriptions.map((item) => (
          <Tariff
            key={item.subscribe_id}
            image={item.subscribe_logo}
            name={item.subscribe_name}
            isActive={item.subscribe_name === tariff.active_subscribe}
            expiryDate={tariff.expiry_date}
          />
        ))}
      </div>
    </LayoutBlock>
  );
};

export default TariffBlock;