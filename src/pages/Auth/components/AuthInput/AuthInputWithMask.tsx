import { FC, InputHTMLAttributes } from 'react';
import InputMask from 'react-input-mask';
import classNames from 'classnames';

import styles from './AuthInput.module.scss';


interface AuthInputWithMaskProps extends InputHTMLAttributes<HTMLInputElement> {
    error: boolean;
    mask: string | (string | globalThis.RegExp)[]
}

const AuthInputWithMask: FC<AuthInputWithMaskProps> = ({ error, mask, ...rest }) => {

  return (
    <InputMask
      {...rest}
      className={classNames(styles.input, { [styles.error]: error })}
      maskPlaceholder={null}
      mask={mask}
    />
  );
};

export default AuthInputWithMask;

