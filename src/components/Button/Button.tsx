import { FC, CSSProperties } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

interface ButtonProps {
    text: string
    type?: 'button' | 'submit' | 'reset'
    style?: CSSProperties;
    loading?: boolean
    handleClick?: () => void
    children?: JSX.Element
    fullPage?: boolean
    disabled?: boolean
}

const Button: FC<ButtonProps> = ({text, style, handleClick, loading, children, fullPage, type, disabled }) => {

  return (
    <button
      type={type}
      style={style}
      onClick={handleClick}
      disabled={loading || disabled}
      className={classNames(styles.button, {[styles.load]: loading, [styles.fullPage]: fullPage})}>
      {children}
      {text}
    </button>
  );
};

export default Button;