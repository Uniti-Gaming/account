import { FC, useState } from 'react';

import { ICurrentTariff, ISubscribeDetails } from '@interfaces/userInterface';
import styles from './TariffBlock.module.scss';

import LayoutBlock from '@/components/LayoutBlock/LayoutBlock';
import Tariff from '../Tariff/Tariff';
import UnsubscribePopup from '../UnsubscribePopup/UnsubscribePopup';

interface TariffBlockProps {
  tariff: ISubscribeDetails[];
  currentTariff: ICurrentTariff;
  handleactivateTariff: (id: number) => void;
}

const TariffBlock: FC<TariffBlockProps> = ({ tariff, handleactivateTariff, currentTariff }) => {
  const [unsbscribePopupIsOpen, setUnsbscribePopupIsOpen] = useState(false);

  return (
    <LayoutBlock
      title='Тарифы'
      link={{
        text: 'Ключи и Тарифы >',
        path: '/tariff',
      }}>
      <div className={styles.body}>
        {tariff.map((item) => (
          <Tariff
            key={item.subscribe_id}
            image_s={item.subscribe_logo}
            image_l={item.subscribe_logo_2}
            name={item.subscribe_name}
            isActive={item.subscribe_id === Number(currentTariff.active_subscribe)}
            expiryDate={currentTariff.expiry_date}
            id={item.subscribe_id}
            price={item.subscribe_price_1}
            opportunities={item.subscribe_opportunities[0]}
            handleactivateTariff={handleactivateTariff}
            openUnsubscribePopup={() => setUnsbscribePopupIsOpen(true)}
          />
        ))}
      </div>
      <UnsubscribePopup
        handleClose={() => setUnsbscribePopupIsOpen(false)}
        isOpen={unsbscribePopupIsOpen}
        title='Подтверждение Отмены Подписки'
      />
    </LayoutBlock>
  );
};

export default TariffBlock;