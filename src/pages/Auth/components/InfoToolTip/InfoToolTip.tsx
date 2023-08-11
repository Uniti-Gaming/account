import classNames from 'classnames';
import { FC, useEffect } from 'react';

import styles from './InfoToolTip.module.scss';

interface InfoToolTipProps {
    children: string
    isOpen: boolean;
    onClose: () => void;
}

const InfoToolTip: FC<InfoToolTipProps> = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    document.addEventListener('click', onClose);
    return () => {
      document.removeEventListener('click', onClose);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={classNames(styles.container, { [styles.open]: isOpen })}
      onClick={e => e.stopPropagation()}
    >
      {children}
    </div>
  );
};

export default InfoToolTip;