import { FC } from 'react';

import styles from './Footer.module.scss';
import { Ilink } from '@interfaces/linksInterfaces';

const mainUrl = import.meta.env.VITE_MAIN_URL;

interface FooterSubMenuProps {
    menulinks: Ilink[]
    mainLink: string
}

const FooterSubMenu: FC<FooterSubMenuProps> = ({ mainLink, menulinks }) => {
  return (
    <li>
      <p className={styles.link} >
        {mainLink}
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
    </li>);
};

export default FooterSubMenu;