import { FC, useContext } from 'react';
import classNames from 'classnames';

import { ITariffPopup, TariffPopupContext } from '@/core/contexts/TariffPopupContext';
import { ISubscribeOpportunity } from '@/core/interfaces/userInterface';
import { addMonthsToDate } from '@utils/dateUtils';
import styles from './Tariff.module.scss';

interface TariffProps {
  image_s: string;
  image_l: string;
  name: string;
  isActive: boolean;
  expiryDate?: string;
  id: number;
  price: number;
  handleactivateTariff: (id: number) => void;
  opportunities: ISubscribeOpportunity;
  openUnsubscribePopup: () => void;
}

const Tariff: FC<TariffProps> = ({
  image_l,
  image_s,
  name,
  isActive,
  expiryDate,
  id,
  price,
  handleactivateTariff,
  opportunities,
  openUnsubscribePopup,
}) => {
  const { openPopup } = useContext(TariffPopupContext);

  const openBuyPopup = () => {
    openPopup({
      type: 'buy',
      title: 'Вы приобретаете:',
      image: image_l,
      buttons: {
        grey: { text: 'Отмена' },
        primary: {
          text: 'Подтвердить',
          onClick: () => handleactivateTariff(id),
        },
      },
      output: {
        name: name,
        total: price,
        period: '1 месяц',
        time: addMonthsToDate(1),
      },
    });
  };

  const descroptionPopup = {
    type: 'tariff',
    title: name,
    image: image_l,
    buttons: {
      grey: { text: 'Назад' },
      primary: {
        text: 'Активировать',
        onClick: openBuyPopup,
      },
    },
    opportunities: opportunities,
  } as ITariffPopup;

  const openDescroptionPopup = () => {
    if (!isActive) {
      openPopup(descroptionPopup);
    } else {
      openUnsubscribePopup();
    }
  };

  return (
    <div className={styles.tariff}>
      <img className={styles.image} src={image_s} alt={`иконка тарифа ${name}`} />
      <div className={styles.wrapper}>
        <div className={styles.itemName}>
          <h5 className={styles.name}>{name}</h5>
          <p className={styles.text}>Тариф</p>
        </div>
        <div className={styles.itemActive}>
          {isActive ? (
            <p className={styles.included}>Активен</p>
          ) : (
            <p className={styles.disabled}>Неактивен</p>
          )}
          <p className={styles.text}>Подробнее</p>
        </div>
        <div className={styles.itemDate}>
          {isActive && (
            <>
              <p className={styles.time}>{expiryDate}</p>
              <p className={styles.text}>Окончание периода подписки</p>
            </>
          )}
        </div>
        <button
          className={classNames(
            styles.link,
            { [styles.active]: isActive },
          )}
          onClick={openDescroptionPopup}
        >
          {isActive ? 'Отменить подписку' : 'Выбрать тариф'}
        </button>
      </div>
    </div>
  );
};

export default Tariff;