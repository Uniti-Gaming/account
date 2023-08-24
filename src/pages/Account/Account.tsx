import { FC, useRef } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';

import styles from './Account.module.scss';

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import PacmanLoader from '@/components/PacmanLoader/PacmanLoader';
import { VerifiedUserContext } from '@/core/contexts/VerifiedUserContext';
import { IUser } from '@/core/interfaces/userInterface';

interface AccountProps {
  verifiedUser: IUser
}

const Account: FC<AccountProps> = ({verifiedUser}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const navigation = useNavigation();

  return (
    <>
      <main className={styles.main}>
        <h1 ref={titleRef} className={styles.title}>Обзор учётной записи</h1>
        <div className={styles.container}>
          <Navbar />
          <VerifiedUserContext.Provider value={verifiedUser}> 
            <div className={styles.content}>
              {navigation.state === 'loading' ? (
                <PacmanLoader />
              ) : (
                <Outlet context={titleRef} />
              )}
            </div>
          </VerifiedUserContext.Provider>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Account;