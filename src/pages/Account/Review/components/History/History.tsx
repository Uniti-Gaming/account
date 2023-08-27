import { FC } from 'react';

import { ITransaction } from '@interfaces/userInterface';
import { getCurrency, getStatus } from './functions';
import styles from './History.module.scss';

import LayoutBlock from '@/components/LayoutBlock/LayoutBlock';

interface HistoryProps {
  transactions: ITransaction[];
}

const History: FC<HistoryProps> = ({ transactions }) => {

  return (
    <LayoutBlock
      title='недавние покупки'
      link={{
        path: '/history',
        text: 'История платежей >',
      }}>
      <div className={styles.body}>
        {transactions && transactions.length > 0 ? transactions.map((transaction, index) => (
          <div key={index} className={styles.transaction}>
            <p className={styles.text}>{transaction.date}</p>
            <p className={styles.text}>{transaction.operation_type}</p>
            <p className={styles.text}>
              {`${transaction.amount} ${getCurrency(transaction.currency_type)}`}
            </p>
            <p className={styles.text}>{getStatus(transaction.status)}</p>
          </div>
        )) : (
          <p className={styles.empty}>Вы ещё не осуществляли покупок</p>
        )}
      </div>
    </LayoutBlock>
  );
};

export default History;