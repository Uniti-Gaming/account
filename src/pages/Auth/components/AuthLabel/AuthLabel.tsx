import { FC } from 'react';

import styles from './AuthLabel.module.scss';

interface AuthLabelProps {
    children: JSX.Element | JSX.Element[];
    text: string
    required?: boolean
}

const AuthLabel: FC<AuthLabelProps> = ({ children, text, required }) => {
  return (
    <div className={styles.label}>
      <p className={styles.text}>
        {text}
        {required && <span className={styles.required}>*</span>}
      </p>
      {children}
    </div>
  );
};

export default AuthLabel;