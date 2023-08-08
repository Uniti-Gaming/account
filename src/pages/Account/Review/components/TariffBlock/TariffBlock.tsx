import styles from './TariffBlock.module.scss';
import heroy from '@images/account/tariff/heroy.png';
import keeper from '@images/account/tariff/keeper.png';
import lord from '@images/account/tariff/lord.png';
import titan from '@images/account/tariff/titan.png';

import LayoutBlock from '@/components/LayoutBlock/LayoutBlock';
import Tariff from '../Tariff/Tariff';


const TariffBlock = () => {
  return (
    <LayoutBlock
      title='Тарифы'
      link={{
        text: 'Ключи и Тарифы >',
        path: '/account/tariff',
      }}>
      <div className={styles.body}>
        <Tariff image={heroy} name='Герой' isActive={false} />
        <Tariff image={lord} name='Легенда' isActive={true} />
        <Tariff image={titan} name='Титан' isActive={false} />
        <Tariff image={keeper} name='Хранитель' isActive={false} />
      </div>
    </LayoutBlock>
  );
};

export default TariffBlock;