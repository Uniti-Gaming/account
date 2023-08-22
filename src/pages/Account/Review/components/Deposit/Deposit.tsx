import { FC } from 'react';

import { IBalance } from '@interfaces/userInterface';

import styles from './Deposit.module.scss';
import upCoin from '@images/account/coins/up-coin.png';
import unCoin from '@images/account/coins/un-coin.png';
import ticket from '@images/account/coins/ticket.png';

import LayoutBlock from '@/components/LayoutBlock/LayoutBlock';
import BalanceItem from '../BalanceItem/BalanceItem';

interface DepositProps {
  balance: IBalance;
}

const Deposit: FC<DepositProps> = ({ balance }) => {
  return (
    <LayoutBlock title='кошелёк unite gaming'
      link={{
        text: 'Пополнить баланс >',
        path: '/account/balance',
      }}>
      <div className={styles.body}>
        <BalanceItem imageSrc={unCoin} count={`${balance.main} TMT`}/>
        <BalanceItem imageSrc={upCoin} count={balance.coins}/>
        <BalanceItem imageSrc={ticket} count={balance.tickets}/>
      </div>
    </LayoutBlock>
  );
};



export default Deposit;