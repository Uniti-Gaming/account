import { FC } from 'react';

import styles from './BalanceItem.module.scss';

interface BalanceItemProps {
    imageSrc: string;
    count: string | number;
}

const BalanceItem: FC<BalanceItemProps> = ({ imageSrc, count }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={imageSrc} alt='иконка монеты' />
      <span className={styles.count}>{count}</span>
    </div>
  );
};

export default BalanceItem;