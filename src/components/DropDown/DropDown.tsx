import { FC, useEffect } from 'react';
import classNames from 'classnames';

import styles from './DropDown.module.scss';


interface DropDownProps {
    children: JSX.Element[];
    isOpen: boolean;
    onClose: () => void;
    style?: React.CSSProperties;
}
const DropDown: FC<DropDownProps> = ({ children, style, isOpen, onClose }) => {

  useEffect(() => {
    document.addEventListener('click', onClose);
    return () => {
      document.removeEventListener('click', onClose);
    };
  }, [isOpen, onClose]);
    
  return (
    <div
      className={classNames(styles.dropdown, { [styles.open]: isOpen })}
      onClick={e => e.stopPropagation()}
      style={style}
    >
      {children}
    </div>
  );
};

export default DropDown;