import { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './SafetyItem.module.scss';

interface SafetyItemProps {
    text: {
      approved: string;
      notApproved?: string;
    };
    path?: string;
    approved: boolean;
}

const SafetyItem: FC<SafetyItemProps> = ({text, approved, path}) => {
  return approved? (
    <div className={classNames(styles.wrapper, styles.approved)}>
      <div className={styles.status} />
      <p className={styles.label}>{text.approved}</p>
    </div>
  ) : (
    <Link to={path || ''} className={styles.wrapper}>
      <div className={styles.status} />
      <p className={styles.label}>{text.notApproved}</p>
    </Link>
  );
};

export default SafetyItem;