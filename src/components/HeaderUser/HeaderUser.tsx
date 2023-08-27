import { FC, MouseEvent, useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import { IUser } from '@interfaces/userInterface';
import { logout } from '@services/userService';
import userIcon from '@images/user-icon.svg';
import userSquare from '@images/user-square.svg';
import arowIcon from '@images/arow.svg';
import wallet from '@images/wallet.svg';
import tariffIcon from '@images/triangle-round-rectangle.svg';
import exitIcon from '@images/exit.svg';
import styles from './HeaderUser.module.scss';

import DropDown from '../DropDown/DropDown';
import NavLinkWidthIcon from '../NavLinkWidthIcon/NavLinkWidthIcon';
import HeaderUserInfo from '../HeaderUserInfo/HeaderUserInfo';
import { AuthContext } from '@/core/contexts/AuthContext';

interface HeaderUserProps {
  currentUser: IUser | null;
}

const HeaderUser: FC<HeaderUserProps> = ({currentUser}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = (e: MouseEvent) => {
    e.stopPropagation();
    setOpen(!isOpen);
  };

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const handleLogout = () => {
    logout();
    login(null);
    navigate('/signin', { replace: true });
  };

  return (
    <>
      <button
        className={styles.button}
        onClick={toggleOpen}
        title={currentUser ? currentUser.name : 'Учётная запись'}
      >
        <img src={userIcon} alt='пак-мэн' />
        <p>{currentUser ? currentUser.name : 'Учётная запись'}</p>
        {currentUser && (
          <img
            className={classNames(styles.arrow, { [styles.active]: isOpen })}
            src={arowIcon}
            alt='стрелка'
          />
        )}
      </button>
      {currentUser ? (
        <DropDown
          onClose={() => setOpen(false)}
          className={classNames(styles.dropdownUser, { [styles.open]: isOpen })}
        >
          <HeaderUserInfo variable='desktop' />
          <nav className={styles.navigation}>
            <h4 className={styles.navTitle}>Мой профиль</h4>
            <NavLinkWidthIcon
              path='/'
              text='Учётная запись'
              icon={userSquare}
              style={{ opacity: 1 }}
            />
            <NavLinkWidthIcon
              path='/balance'
              text='Пополнить баланс'
              icon={wallet}
              style={{ opacity: 1 }}
            />
            <NavLinkWidthIcon
              path='/tariff'
              text='Тарифы и ключи'
              icon={tariffIcon}
              style={{ opacity: 1 }}
            />
            <NavLinkWidthIcon
              path='/'
              text='Выйти из аккаунта'
              icon={exitIcon}
              style={{ opacity: 1, color: '#DE3341' }}
              onClick={handleLogout}
            />
          </nav>
        </DropDown>
      ) : (
        <DropDown
          onClose={() => setOpen(false)}
          className={classNames(styles.dropdownSign, { [styles.open]: isOpen })}
        >
          <Link to='/signin' className={styles.link}>Войти</Link>
          <Link to='/signup' className={styles.link}>Регистрация</Link>
        </DropDown>
      )}
    </>
  );
};

export default HeaderUser;