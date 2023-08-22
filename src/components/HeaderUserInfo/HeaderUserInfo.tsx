import { FC, useContext } from 'react';

import { AuthContext } from '@/core/contexts/AuthContext';
import { IUser } from '@interfaces/userInterface';
import styles from './HeaderUserInfo.module.scss';

interface HeaderUserInfoProps {
    variable: 'phone' | 'desktop';
}

const HeaderUserInfo: FC<HeaderUserInfoProps> = ({ variable }) => {
  const { currentUser } = useContext(AuthContext) as { currentUser: IUser };

  return (
    <div className={styles[variable]}>
      <h2 className={styles.name}>ID: {currentUser.user_id}</h2>
      <p className={styles.email}>{currentUser.email}</p>
    </div >
  );
};

export default HeaderUserInfo;