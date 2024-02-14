import { useState } from 'react';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import classNames from 'classnames';

import { IBalance } from '@interfaces/userInterface';
import upCoin from '@images/account/coins/up-coin.png';
import unCoin from '@images/account/coins/un-coin.png';
import ticket from '@images/account/coins/ticket.png';
import styles from './Balance.module.scss';

import LayoutBlock from '@/components/LayoutBlock/LayoutBlock';
import { ReplenishPopup, ExchangePopup } from './components';

const Balance = () => {
  const balance = useLoaderData() as IBalance;
  const titleRef = useOutletContext() as React.RefObject<HTMLHeadingElement>;
  titleRef.current ? titleRef.current.textContent = 'Пополнить Баланс' : null;
  const [popup, setPopup] = useState({
    replenish: false,
    exchange: {
      isOpen: false,
      title: 'tickets',
    },
  });

  return (
    <LayoutBlock title='Кошелёк Unite Gaming'>
      <div className={styles.body}>
        <p className={styles.text}>Текущий баланс</p>
        <div className={styles.money}>
          <img className={styles.image} src={upCoin} alt='монета тмт' />
          <p className={styles.text}>{balance.main} TMT</p>
        </div>
        <p className={styles.text}>Баллы</p>
        <div>
          <img className={styles.image} src={unCoin} alt='монета баллов' />
          <p className={styles.text}>{balance.coins} UG Баллов</p>
        </div>
        <button
          className={classNames(styles.exchange, styles.scores)}
          onClick={() => setPopup({
            ...popup,
            exchange: {
              title: 'scores',
              isOpen: true,
            },
          })}
        >
          Обменять баланс на баллы
        </button>
        <p className={styles.text}>Билеты</p>
        <div>
          <img className={styles.image} src={ticket} alt='билет' />
          <p className={styles.text}>{balance.tickets} Билетов</p>
        </div>
        <button
          className={classNames(styles.exchange, styles.tickets)}
          onClick={() => setPopup({
            ...popup,
            exchange: {
              title: 'tickets',
              isOpen: true,
            },
          })}
        >
          Обменять баланс на билеты
        </button>
        <button
          className={styles.replenish}
          onClick={() => setPopup({ ...popup, replenish: true })}
        >
          Пополнить кошелёк Unite Gaming
        </button>
        <button className={styles.code}>Использовать код</button>
      </div>
      <ReplenishPopup
        isOpen={popup.replenish}
        handleClose={() => setPopup({ ...popup, replenish: false })}
        title='Пополнение баланса Unite Gaming'
      />
      <ExchangePopup
        isOpen={popup.exchange.isOpen}
        handleClose={() => setPopup({ ...popup, exchange: { ...popup.exchange, isOpen: false } })}
        title={popup.exchange.title as 'scores' | 'tickets'}
        rate={2}
        balance={balance.main}
      />
    </LayoutBlock>
  );
};

export default Balance;