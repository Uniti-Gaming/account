import { FC } from 'react';

import { ITariff } from '@interfaces/userInterface';
import styles from './TariffBlock.module.scss';
import heroy from '@images/account/tariff/heroy.png';
import keeper from '@images/account/tariff/keeper.png';
import lord from '@images/account/tariff/lord.png';
import titan from '@images/account/tariff/titan.png';

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
        <Tariff
          image={heroy}
          name='Герой'
          isActive={tariff?.subscribe_name === 'Герой'}
          expiryDate={tariff?.subscribe_end || ''}
        />
        <Tariff
          image={lord}
          name='Властелин'
          isActive={tariff?.subscribe_name === 'Герой'}
          expiryDate={tariff?.subscribe_end || ''}
        />
        <Tariff
          image={titan}
          name='Титан'
          isActive={tariff?.subscribe_name === 'Герой'}
          expiryDate={tariff?.subscribe_end || ''}
        />
        <Tariff
          image={keeper}
          name='Хранитель'
          isActive={tariff?.subscribe_name === 'Герой'}
          expiryDate={tariff?.subscribe_end || ''}
        />
      </div>
    </LayoutBlock>
  );
};

export default TariffBlock;