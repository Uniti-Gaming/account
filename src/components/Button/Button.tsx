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
  className?: string
}

const Button: FC<ButtonProps> = ({
  handleClick, loading, disabled,
  fullPage, small, style,
  text, type,
  children, className,
}) => {
  const buttonClass = classNames(
    styles.button, className, {
      [styles.disabled]: disabled,
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