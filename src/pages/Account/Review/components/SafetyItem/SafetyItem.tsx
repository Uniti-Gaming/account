import { FC } from 'react';
import classNames from 'classnames';

import styles from './SafetyItem.module.scss';

interface SafetyItemProps {
    text: string;
    approved: boolean;
}

const SafetyItem: FC<SafetyItemProps> = ({text, approved}) => {
  return (
    <div className={classNames(styles.wrapper, {[styles.approved]: approved})}>
      <div className={styles.status} />
      <p className={styles.label}>{text}</p>
    </div>
  );
};

export default SafetyItem;