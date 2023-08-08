import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavLinkWidthIcon.module.scss';
import classNames from 'classnames';

interface NavLinkWidthIconProps {
    text: string;
    path: string;
    icon: string;
    style?: React.CSSProperties;
}

const NavLinkWidthIcon: FC<NavLinkWidthIconProps> = ({ text, path, style, icon }) => {
  return (
    <NavLink
      style={style}
      className={({ isActive }) => classNames(styles.link, { [styles.active]: isActive })}
      to={path}
    >
      <img className={styles.icon} src={icon} alt={`иконка ${text}`} />
      {text}
    </NavLink>
  );
};
export default NavLinkWidthIcon;