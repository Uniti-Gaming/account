import { useLoaderData, useOutletContext } from 'react-router-dom';
import classNames from 'classnames';

import { IBalance } from '@interfaces/userInterface';
import upCoin from '@images/account/coins/up-coin.png';
import unCoin from '@images/account/coins/un-coin.png';
import ticket from '@images/account/coins/ticket.png';
import styles from './Balance.module.scss';

import LayoutBlock from '@/components/LayoutBlock/LayoutBlock';

const Balance = () => {
  const balance = useLoaderData() as IBalance;
  const titleRef = useOutletContext() as React.RefObject<HTMLHeadingElement>;
  titleRef.current ? titleRef.current.textContent = 'Пополнить Баланс' : null;

  return (
    <>
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
          <button className={classNames(styles.exchange, styles.scores)}>
            Обменять баланс на баллы
          </button>
          <p className={styles.text}>Билеты</p>
          <div>
            <img className={styles.image} src={ticket} alt='билет' />
            <p className={styles.text}>{balance.tickets} Билетов</p>
          </div>
          <button className={classNames(styles.exchange, styles.tickets)}>
            Обменять баланс на билеты
          </button>
          <button className={styles.replenish}>Пополнить кошелёк Unite Gaming</button>
          <button className={styles.code}>Использовать код</button>
        </div>
      </LayoutBlock>
    </>
  );
};

export default Balance;