import { useState } from 'react';
import classNames from 'classnames';

import { menulinks } from '@utils/menuLinks';
import styles from './Header.module.scss';
import logo from '@images/logo.svg';

import HeaderSubMenu from './HeaderSubMenu';
import HeaderUser from '../HeaderUser/HeaderUser';

const mainUrl = import.meta.env.VITE_MAIN_URL;

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <a href={mainUrl}>
          <img src={logo} className={styles.logo} alt='логотип' />
        </a>
        <nav className={classNames(styles.navigation, { [styles.active]: isMenuOpen })}>
          <ul className={styles.menu}>
            <li><a href={mainUrl} className={classNames(styles.link_home, styles.link)}>Главная</a></li>
            <HeaderSubMenu menulinks={menulinks.ourProducts} mainLink='Наши продукты' />
            <HeaderSubMenu menulinks={menulinks.games} mainLink='Игры' />
            <li><a href={`${mainUrl}/donate`} className={styles.link}>Донат</a></li>
            <HeaderSubMenu menulinks={menulinks.about} mainLink='О нас' />
            <li><a href={`${mainUrl}/partners`} className={styles.link}>Партнёры</a></li>
            <li><a href={`${mainUrl}/community`} className={styles.link}>Сообщество</a></li>
            <li><a href={`${mainUrl}/support`} className={styles.link}>Поддержка</a></li>
          </ul>
        </nav>
        <select className={styles.lang} name='lang'>
          <option value='ru'>RU</option>
          <option value='tm'>TM</option>
        </select>
        <button
          className={classNames(styles.burger, { [styles.active]: isMenuOpen })}
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <span />
        </button>
        <HeaderUser />
      </div>
    </header>
  );
};

export default Header;