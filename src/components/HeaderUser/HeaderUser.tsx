import { MouseEvent, useContext, useState } from 'react';
import classNames from 'classnames';

import { AuthContext } from '@/core/contexts/AuthContext';

import styles from './HeaderUser.module.scss';
import userIcon from '@images/user-icon.svg';
import userSquare from '@images/user-square.svg';
import arowIcon from '@images/arow.svg';
import wallet from '@images/wallet.svg';
import tariffIcon from '@images/triangle-round-rectangle.svg';
import exitIcon from '@images/exit.svg';

import DropDown from '../DropDown/DropDown';
import NavLinkWidthIcon from '../NavLinkWidthIcon/NavLinkWidthIcon';

const HeaderUser = () => {
  const { currentUser } = useContext(AuthContext);
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = (e: MouseEvent) => {
    e.stopPropagation();
    setOpen(!isOpen);
  };

  const handleNavigationClick = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        className={styles.button}
        onClick={toggleOpen}
        title={currentUser.name}
      >
        <img src={userIcon} alt='пак-мэн' />
        <p>{currentUser.name}</p>
        <img
          className={classNames(styles.arrow, { [styles.active]: isOpen })}
          src={arowIcon}
          alt='стрелка'
        />
      </button>
      <DropDown
        style={{ marginTop: '20px', padding: '22px 30px' }}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      >
        <h2 className={styles.name}>ID: {currentUser.id}</h2>
        <p className={styles.email}>{currentUser.email}</p>
        <nav className={styles.navigation}>
          <NavLinkWidthIcon
            path='/'
            text='Учётная запись'
            icon={userSquare}
            style={{ opacity: 1 }}
            onClick={handleNavigationClick}
          />
          <NavLinkWidthIcon
            path='/'
            text='Пополнить баланс'
            icon={wallet}
            style={{ opacity: 1 }}
            onClick={handleNavigationClick}
          />
          <NavLinkWidthIcon
            path='/'
            text='Тарифы и ключи'
            icon={tariffIcon}
            style={{ opacity: 1 }}
            onClick={handleNavigationClick}
          />
          <NavLinkWidthIcon
            path='/'
            text='Выйти из аккаунта'
            icon={exitIcon}
            style={{ opacity: 1, color: '#DE3341' }}
          />
        </nav>
      </DropDown>
    </>
  );
};

export default HeaderUser;