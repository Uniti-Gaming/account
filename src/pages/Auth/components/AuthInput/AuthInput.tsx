import { FC, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './AuthInput.module.scss';

export interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const AuthInput: FC<AuthInputProps> = ({ error, ...props }) => {
  return (
    <input {...props} className={classNames(styles.input, { [styles.error]: error })} />
  );
};

export default AuthInput;
