import { FC } from 'react';
import classNames from 'classnames';

import styles from './History.module.scss';

import Button from '@/components/Button/Button';

interface IPaginationButtonsProps {
  totalPages: number;
  currentPage: number;
  onChangePage: (page: number) => void;
}
export const PaginationButtons: FC<IPaginationButtonsProps> = ({ totalPages, currentPage, onChangePage }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const renderButtons = () => {
    const pageNumbers = getPageNumbers();

    return (
      <tr>
        <td colSpan={4} className={styles.footer}>
          {currentPage > 3 && (
            <>
              <Button
                text='1'
                handleClick={() => onChangePage(1)}
                className={classNames(styles.button, styles.notActive)}
              />
              <span className={styles.dots}>.......</span>
            </>
          )}
          {pageNumbers.map((page) => (
            <Button
              key={page}
              text={String(page)}
              handleClick={() => onChangePage(page)}
              className={classNames(styles.button, { [styles.notActive]: page !== currentPage })}
            />
          ))}
          {currentPage < totalPages - 2 && (
            <>
              <span className={styles.dots}>.......</span>
              <Button
                text={String(totalPages)}
                handleClick={() => onChangePage(totalPages)}
                className={classNames(styles.button, styles.notActive)}
              />
            </>
          )}

        </td>
        <td>
          {currentPage < totalPages && (
            <Button
              text=''
              handleClick={() => onChangePage(currentPage + 1)}
              className={classNames(styles.button, styles.next)}
            />
          )}
        </td>
      </tr>
    );
  };

  return <tfoot>{renderButtons()}</tfoot>;
};
