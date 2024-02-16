import { useEffect, useState } from 'react';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import classNames from 'classnames';

import { ITransaction } from '@/core/interfaces/userInterface';
import { getCurrency, getStatus } from '@utils/historyHelpers';
import styles from './History.module.scss';

import LayoutBlock from '@/components/LayoutBlock/LayoutBlock';
import Button from '@/components/Button/Button';
import { PaginationButtons } from './PaginationButtons';

const History = () => {
  const transactions = useLoaderData() as ITransaction[];
  const titleRef = useOutletContext() as React.RefObject<HTMLHeadingElement>;
  const [displayedTransactions, setDisplayedTransactions] = useState({
    page: 1,
    filter: 'all',
    transactions: transactions.slice(0, 5),
    totalPages: Math.ceil(transactions.length / 5),
  });

  const handleChangeDisplayedTransactions = ({ page, filter }: { page: number, filter: string }) => {
    const newTransactions = transactions.filter((transaction) => {
      switch (filter) {
      case 'all':
        return true;
      case filter:
        return transaction.operation_type === filter;
      default:
        return false;
      }
    });

    setDisplayedTransactions({
      page,
      filter,
      transactions: newTransactions.slice((page - 1) * 5, page * 5),
      totalPages: Math.ceil(newTransactions.length / 5),
    });
  };

  useEffect(() => {
    titleRef.current ? titleRef.current.textContent = 'История Транзакций' : null;
  }, [titleRef]);

  return (
    <LayoutBlock title='История транзакций'>
      <div className={styles.filter}>
        <Button
          text='Все'
          className={classNames(
            styles.button,
            { [styles.notActive]: displayedTransactions.filter !== 'all' },
          )}
          handleClick={() => handleChangeDisplayedTransactions({ page: 1, filter: 'all' })}
        />
        <Button
          text='Баланс'
          className={classNames(
            styles.button,
            { [styles.notActive]: displayedTransactions.filter !== 'main' },
          )}
          handleClick={() => handleChangeDisplayedTransactions({ page: 1, filter: 'main' })}
        />
        <Button
          text='UG баллы'
          className={classNames(
            styles.button,
            { [styles.notActive]: displayedTransactions.filter !== 'coins' },
          )}
          handleClick={() => handleChangeDisplayedTransactions({ page: 1, filter: 'coins' })}
        />
        <Button
          text='Билеты'
          className={classNames(
            styles.button,
            { [styles.notActive]: displayedTransactions.filter !== 'tickets' },
          )}
          handleClick={() => handleChangeDisplayedTransactions({ page: 1, filter: 'tickets' })}
        />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.text}>Дата</th>
            <th className={styles.text}>Наименование</th>
            <th className={styles.text}>Итого</th>
            <th className={styles.text}>Статус</th>
            <th className={styles.text}>№ заказа</th>
          </tr>
        </thead>
        <tbody>
          {displayedTransactions.transactions &&
            displayedTransactions.transactions.length > 0 ?
            displayedTransactions.transactions.map((transaction, index) => (
              <tr
                key={index}
                className={classNames(
                  styles.transaction,
                  { [styles.first]: index === 0 },
                )}
              >
                <td className={styles.text}>{transaction.date}</td>
                <td className={styles.text}>{transaction.operation_type}</td>
                <td className={styles.text}>
                  {`${transaction.amount} ${getCurrency(transaction.currency_type)}`}
                </td>
                <td
                  className={classNames(
                    styles.text,
                    styles[transaction.status],
                  )}
                >
                  {getStatus(transaction.status)}
                </td>
                <td className={styles.text}>{transaction.transaction_id}</td>
              </tr>
            )) : (
              <tr>
                <td colSpan={5} className={styles.empty}>Вы ещё не осуществляли покупок</td>
              </tr>
            )}
        </tbody>
        {displayedTransactions.totalPages > 1 && (
          <PaginationButtons
            totalPages={displayedTransactions.totalPages}
            currentPage={displayedTransactions.page}
            onChangePage={(page) => {
              handleChangeDisplayedTransactions({
                page,
                filter: displayedTransactions.filter,
              });
            }}
          />
        )}
      </table>
    </LayoutBlock>
  );
};

export default History;
