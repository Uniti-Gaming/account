import { Outlet } from 'react-router-dom';

import styles from './Account.module.scss';

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const Account = () => {

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Обзор учётной записи</h1>
        <div className={styles.container}>
          <Navbar />
          <div className={styles.content}>
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Account;