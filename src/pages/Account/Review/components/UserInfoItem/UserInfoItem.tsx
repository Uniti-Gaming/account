import { FC } from 'react';

import styles from './UserInfoItem.module.scss';

interface UserInfoItemProps {
    label: string
    value: string
}

const UserInfoItem: FC<UserInfoItemProps> = ({ label, value}) => {
  return (
    < >
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value}</p>
    </>
  );
};

export default UserInfoItem;