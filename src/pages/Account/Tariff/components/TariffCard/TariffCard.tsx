import { FC, useState } from 'react';
import classNames from 'classnames';

import { ISubscription } from '@interfaces/userInterface';
import styles from './TariffCard.module.scss';

import Button from '@/components/Button/Button';


const TariffCard: FC<ISubscription> = ({
  subscribe_name,
  subscribe_logo,
  subscribe_price_1,
  subscribe_price_3,
  subscribe_price_6,
}) => {
  const [count, setCount] = useState<1 | 3 | 6>(1);
  const price = {
    1: subscribe_price_1,
    3: subscribe_price_3,
    6: subscribe_price_6,
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
        <img className={styles.image} src={subscribe_logo} alt={subscribe_name} />
        <div className={styles.total}>
          <p className={styles.price}>{price[count]} TMT</p>
          <span className={styles.time}>
            {count === 1 ? '/ месяц' : count === 3 ? '/ 3 месяца' : '/ 6 месяцев'}
          </span>
        </div>
        <div className={styles.buttons}>
          <Button text='Активировать' small />
          <Button text='Подробнее' small style={{ backgroundColor: '#484652' }} />
        </div>
      </div>
    </div>
  );
};

export default TariffCard;