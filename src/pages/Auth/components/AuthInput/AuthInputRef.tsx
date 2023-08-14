import { FC } from 'react';
import InputMask from 'react-input-mask';
import classNames from 'classnames';

import styles from './AuthInput.module.scss';


interface AuthInputPhoneProps {
    error: boolean;
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthInputPhone: FC<AuthInputPhoneProps> = ({ error, value, handleChange }) => {

  return (
    <InputMask
      type='text'
      name='friendRef'
      className={classNames(styles.input, { [styles.error]: error })}
      value={value}
      onChange={handleChange}
      placeholder='Введите код приглашения'
      mask={'9999-9999-9999'}
      maxLength={12}
    />
  );
};

export default AuthInputPhone;

