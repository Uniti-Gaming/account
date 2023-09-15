import { FC, useContext, useState } from 'react';
import classNames from 'classnames';

import { ISubscribeDetail } from '@interfaces/userInterface';
import { TariffPopupContext } from '@/core/contexts/TariffPopupContext';
import styles from './TariffCard.module.scss';

import Button from '@/components/Button/Button';

const months = {
  1: '1 месяц',
  3: '3 месяца',
  6: '6 месяцев',
};

function addMonthsToDate(months: 1 | 3 | 6) {
  const currentDate = new Date();
  const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + months, currentDate.getDate());
  const formattedDate = newDate.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  }).replace(/\./g, '.');
  return formattedDate;
}

const TariffCard: FC<ISubscribeDetail> = ({
  subscribe_name,
  subscribe_logo_2,
  subscribe_price_1,
  subscribe_price_3,
  subscribe_price_6,
  subscribe_opportunities,
}) => {
  const { openPopup } = useContext(TariffPopupContext);
  const [count, setCount] = useState<1 | 3 | 6>(1);
  const price = {
    1: subscribe_price_1,
    3: subscribe_price_3,
    6: subscribe_price_6,
  };

  const openDescroptionPopup = () => {
    openPopup({
      type: 'tariff',
      title: subscribe_name,
      image: subscribe_logo_2,
      button: {
        grey: 'Назад',
        primary: 'Активировать',
      },
      options: subscribe_opportunities[0],
    });
  };

  const openBuyPopup = () => {
    openPopup({
      type: 'buy',
      title: 'Вы приобретаете:',
      image: subscribe_logo_2,
      button: {
        grey: 'Отмена',
        primary: 'Подтвердить',
      },
      output: {
        name: subscribe_name,
        total: price[count],
        period: months[count],
        time: addMonthsToDate(count),
      },
    });
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{subscribe_name}</h3>
      <div className={styles.main}>
        <div className={styles.buttons}>
          <button
            className={classNames(styles.month, { [styles.active]: count === 1 })}
            onClick={() => setCount(1)}
          >
            1 месяц
          </button>
          <button
            className={classNames(styles.month, { [styles.active]: count === 3 })}
            onClick={() => setCount(3)}
          >
            3 месяца
          </button>
          <button
            className={classNames(styles.month, { [styles.active]: count === 6 })}
            onClick={() => setCount(6)}
          >
            6 месяцев
          </button>
        </div>
        <img className={styles.image} src={subscribe_logo_2} alt={subscribe_name} />
        <div className={styles.total}>
          <p className={styles.price}>{price[count]} TMT</p>
          <span className={styles.time}>{`/ ${months[count]}`}</span>
        </div>
        <div className={styles.buttons}>
          <Button text='Активировать' small handleClick={openBuyPopup} />
          <Button text='Подробнее' small style={{ backgroundColor: '#484652' }} handleClick={openDescroptionPopup} />
        </div>
      </div>
    </div>
  );
};

export default TariffCard;