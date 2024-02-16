import { Dispatch, FC, SetStateAction, useCallback, useMemo, useRef, useState } from 'react';
import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';

import { VerifiedUserContext } from '@/core/contexts/VerifiedUserContext';
import { IUser } from '@interfaces/userInterface';
import styles from './Account.module.scss';

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Loader from '@/components/Loader/Loader';

interface AccountProps {
  verifiedUser: IUser
}

const Account: FC<AccountProps> = ({ verifiedUser }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const navigation = useNavigation();

  const [currentUser, setCurrentUser] = useState<IUser>(verifiedUser);

  const login: Dispatch<SetStateAction<IUser>> = useCallback((user) => {
    setCurrentUser(user);
  }, []);

  const contextValue = useMemo(() => ({
    currentUser,
    login,
  }), [currentUser, login]);

  return (
    <>
      <main className={styles.main}>
        <h1 ref={titleRef} className={styles.title}>Обзор учётной записи</h1>
        <div className={styles.container}>
          <Navbar />
          <VerifiedUserContext.Provider value={contextValue}>
            <div className={styles.content}>
              {navigation.state === 'loading' ? (
                <>
                  <ScrollRestoration />
                  <Loader />
                </>
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