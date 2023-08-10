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
    small?: boolean
    disabled?: boolean
}

const Button: FC<ButtonProps> = ({
  handleClick, loading, disabled,
  fullPage, small, style,
  text, type,
  children,
}) => {
  const buttonClass = classNames(styles.button, {
    [styles.load]: loading,
    [styles.fullPage]: fullPage,
    [styles.small]: small,
  });

  return (
    <button
      type={type}
      style={style}
      onClick={handleClick}
      disabled={loading || disabled}
      className={buttonClass}
    >
      {children}
      {text}
    </button>
  );
};

export default Button;