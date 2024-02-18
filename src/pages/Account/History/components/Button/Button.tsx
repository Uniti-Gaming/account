import { FC } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

import {
  ButtonProps as DefaultButonProps,
  default as DefaultButton,
} from '@/components/Button/Button';

interface ButtonProps extends DefaultButonProps {
    isActive: boolean;
}
export const Button: FC<ButtonProps> = ({ isActive, className, ...props }) => {
  return (
    <DefaultButton
      {...props}
      className={classNames(
        className,
        styles.button,
        { [styles.notActive]: !isActive },
      )}
    />
  );
};
