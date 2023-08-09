import { FC } from 'react';

import styles from './AuthLabel.module.scss';

interface AuthLabelProps {
    children: JSX.Element | JSX.Element[];
    text: string
}

const AuthLabel: FC<AuthLabelProps> = ({ children, text }) => {
  return (
    <label className={styles.label}>
      <p className={styles.text}>{text}</p>
      {children}
    </label>
  );
};

export default AuthLabel;