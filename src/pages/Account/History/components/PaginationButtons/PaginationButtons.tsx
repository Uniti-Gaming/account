import { FC } from 'react';

import styles from './PaginationButtons.module.scss';

import { Button } from '../Button/Button';

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
                isActive={false}
              />
              <span className={styles.dots}>.......</span>
            </>
          )}
          {pageNumbers.map((page) => (
            <Button
              key={page}
              text={String(page)}
              handleClick={() => onChangePage(page)}
              isActive={page === currentPage}
            />
          ))}
          {currentPage < totalPages - 2 && (
            <>
              <span className={styles.dots}>.......</span>
              <Button
                text={String(totalPages)}
                handleClick={() => onChangePage(totalPages)}
                isActive={false}
              />
            </>
          )}

        </td>
        <td>
          {currentPage < totalPages && (
            <Button
              text=''
              handleClick={() => onChangePage(currentPage + 1)}
              isActive={true}
              className={styles.next}
            />
          )}
        </td>
      </tr>
    );
  };

  return <tfoot>{renderButtons()}</tfoot>;
};
