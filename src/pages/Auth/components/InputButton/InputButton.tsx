import { FC, MouseEvent } from 'react';

import styles from './InputButton.module.scss';

interface InputButtonProps {
    children: JSX.Element | JSX.Element[];
    handleClick: (evt: MouseEvent) => void;
}

const InputButton: FC<InputButtonProps> = ({ children, handleClick }) => {
  return (
    <button type='button' className={styles.button} onClick={handleClick}>
      {children}
    </button>
  );
};

export default InputButton;