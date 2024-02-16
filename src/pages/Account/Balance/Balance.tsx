import { useState } from 'react';
import { useLoaderData, useNavigate, useOutletContext } from 'react-router-dom';
import classNames from 'classnames';

import { IBalance } from '@interfaces/userInterface';
import { IRates } from '@interfaces/exchangeInterfaces';
import { exchange } from '@services/exchangeServices';
import { getBalance } from '@services/userService';
import upCoin from '@images/account/coins/up-coin.png';
import unCoin from '@images/account/coins/un-coin.png';
import ticket from '@images/account/coins/ticket.png';
import styles from './Balance.module.scss';

import LayoutBlock from '@/components/LayoutBlock/LayoutBlock';
import InfoMessages from '@/components/InfoMessages/InfoMessages';
import { ReplenishPopup, ExchangePopup } from './components';

interface IBalanceLoaderData {
  balance: IBalance;
  rates: IRates;
}

interface IPopup {
  replenish: boolean;
  exchange: {
    isOpen: boolean;
    title: keyof IRates;
  };
}

const Balance = () => {
  const { balance, rates } = useLoaderData() as IBalanceLoaderData;
  const navigate = useNavigate();
  const titleRef = useOutletContext() as React.RefObject<HTMLHeadingElement>;
  titleRef.current ? titleRef.current.textContent = 'Пополнить Баланс' : null;
  const [userBalance, setUserBalance] = useState<IBalance>(balance);
  const [infoMessagesList, setInfoMessagesList] = useState<{ message: string, success: boolean }[]>([]);
  const [popup, setPopup] = useState<IPopup>({
    replenish: false,
    exchange: { isOpen: false, title: 'main_tickets' },
  });

  const handleChangeBalance = ({ value, endpoint }: { value: number; endpoint: string }): Promise<boolean> => {
    return exchange({ value, endpoint })
      .then((res) => {
        setInfoMessagesList(prevInfoMessagesList => [...prevInfoMessagesList, res]);
        setTimeout(() => {
          setInfoMessagesList(prevInfoMessagesList =>
            prevInfoMessagesList.filter(message => message !== res),
          );
        }, 5000);
        return getBalance()
          .then((balance) => {
            setUserBalance(balance);
            return true;
          })
          .catch((err) => { throw err; });
      })
      .catch(async (error) => {
        if (error instanceof Response) {
          const errorData = await error.json();
          setInfoMessagesList([...infoMessagesList, errorData]);
          setTimeout(() => {
            setInfoMessagesList(prevInfoMessagesList =>
              prevInfoMessagesList.filter(message => message !== errorData),
            );
          }, 5000);
        }
        // eslint-disable-next-line no-console
        console.log(error);
        return false;
      });
  };

  return (
    <>
      {infoMessagesList.length > 0 && (<InfoMessages items={infoMessagesList} />)}
      <LayoutBlock title='Кошелёк Unite Gaming'>
        <div className={styles.body}>
          <p className={styles.text}>Текущий баланс</p>
          <div className={styles.money}>
            <img className={styles.image} src={upCoin} alt='монета тмт' />
            <p className={styles.text}>{userBalance.main} TMT</p>
          </div>
          <p className={styles.text}>Баллы</p>
          <div>
            <img className={styles.image} src={unCoin} alt='монета баллов' />
            <p className={styles.text}>{userBalance.coins} UG Баллов</p>
          </div>
          <button
            className={classNames(styles.exchange, styles.scores)}
            onClick={() => setPopup({
              ...popup,
              exchange: {
                title: 'main_coins',
                isOpen: true,
              },
            })}
          >
            Обменять баланс на баллы
          </button>
          <p className={styles.text}>Билеты</p>
          <div>
            <img className={styles.image} src={ticket} alt='билет' />
            <p className={styles.text}>{userBalance.tickets} Билетов</p>
          </div>
          <button
            className={classNames(styles.exchange, styles.tickets)}
            onClick={() => setPopup({
              ...popup,
              exchange: {
                title: 'main_tickets',
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
          <button
            className={styles.code}
            onClick={() => {
              navigate('/use-code');
            }}
          >
              Использовать код
          </button>
        </div>
        <ReplenishPopup
          isOpen={popup.replenish}
          handleClose={() => setPopup({ ...popup, replenish: false })}
          title='Пополнение баланса Unite Gaming'
        />
        <ExchangePopup
          isOpen={popup.exchange.isOpen}
          handleClose={() => setPopup({ ...popup, exchange: { ...popup.exchange, isOpen: false } })}
          title={popup.exchange.title}
          rate={Number(rates[popup.exchange.title])}
          balance={userBalance.main}
          changeBalance={handleChangeBalance}
        />
      </LayoutBlock>
    </>
  );
};

export default Balance;
