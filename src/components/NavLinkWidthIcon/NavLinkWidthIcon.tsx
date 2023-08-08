import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavLinkWidthIcon.module.scss';
import classNames from 'classnames';

interface NavLinkWidthIconProps {
    text: string;
    path: string;
    icon: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

const NavLinkWidthIcon: FC<NavLinkWidthIconProps> = ({ text, path, style, icon, onClick }) => {
  return (
    <NavLink
      style={style}
      className={({ isActive }) => classNames(styles.link, { [styles.active]: isActive })}
      to={path}
      onClick={onClick}
    >
      <img className={styles.icon} src={icon} alt={`иконка ${text}`} />
      {text}
    </NavLink>
  );
};
export default NavLinkWidthIcon;