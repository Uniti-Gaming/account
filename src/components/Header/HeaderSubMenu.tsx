import { FC, useState } from 'react';
import classNames from 'classnames';

import styles from './Header.module.scss';
import { Ilink } from '@interfaces/linksInterfaces';

const mainUrl = import.meta.env.VITE_MAIN_URL;

interface HeaderSubMenuProps {
    menulinks: Ilink[]
    mainLink: string
}

const HeaderSubMenu: FC<HeaderSubMenuProps> = ({ mainLink, menulinks }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <li className={classNames({ [styles.open]: isMenuOpen })}>
      <p className={styles.link} onClick={() => setMenuOpen(!isMenuOpen)} >
        {mainLink}
        <span className={styles.arow}></span>
      </p>
      <div>
        <ul className={styles.submenu}>
          {menulinks.map((link, index) => (
            <a
              key={index}
              href={`${mainUrl}/${link.path}`}
              className={styles.sublink}
            >
              {link.ru}
            </a>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default HeaderSubMenu;