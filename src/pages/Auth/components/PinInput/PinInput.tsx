import { useImperativeHandle, useRef, forwardRef, Ref } from 'react';

import styles from './PinInput.module.scss';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function updateArray(array: string[], index: number, newValue: string): string[] {
  const copy = [...array];
  copy[index] = newValue;
  return copy;
}

interface IPinInputProps {
  digits: string[];
  onChange: React.Dispatch<React.SetStateAction<string[]>>;
  error: boolean;
}

export interface IPinInputRef {
  focus: () => void;
}

export const PinInput = forwardRef<IPinInputRef, IPinInputProps> ((props, ref: Ref<IPinInputRef>) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRefs.current[0]?.focus();
    },
  }));

  const handleChange = (index: number, newValue: string) => {
    const oldDigit = props.digits[index];
    const newDigit = newValue.trim().replace(oldDigit, '');
    props.onChange(updateArray(props.digits, index, newDigit));
    const inputs = inputRefs.current;
    if (index < inputs.length - 1) {
      inputs[index + 1]?.focus();
    } else {
      inputs[index]?.blur();
    }
  };

  const handleKeyDown = (index: number, keyPressed: string) => {
    if (keyPressed !== 'Backspace') {
      return;
    }
    if (props.digits[index]) {
      props.onChange(updateArray(props.digits, index, ''));
    } else if (index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className={styles.container}>
      {props.digits.map((digit, index) => (
        <input
          key={index}
          className={styles.input}
          value={digit}
          onChange={(event) => handleChange(index, event.target.value)}
          onKeyDown={(event) => handleKeyDown(index, event.key)}
          ref={(ref) => inputRefs.current[index] = ref as HTMLInputElement}
          autoComplete='off'
          type='text'
          maxLength={1}
          required
        />
      ))}
      {props.error && (<ErrorMessage message='Неверный код, попробуйте ещё раз' />)}
    </div>
  );
});