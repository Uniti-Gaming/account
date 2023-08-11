/* eslint-disable max-len */
import { FC } from 'react';

import styles from './Checkbox.module.scss';

interface CheckboxProps {
    children: JSX.Element
    chekboxRef: React.Ref<HTMLInputElement> | null;
}

const Checkbox: FC<CheckboxProps> = ({ children, chekboxRef }) => {
  return (
    <label className={styles.label}>
      <input ref={chekboxRef} className={styles.input} type='checkbox' />
      <span className={styles.span}>
        <svg className={styles.checkmark} width='12' height='12' viewBox='0 0 12 12' fill='none'>
          <path d='M0 6.78763C0.0215619 6.2281 0.258742 5.81994 0.743055 5.59715C1.23234 5.37096 1.69675 5.4577 2.09648 5.82334C2.7085 6.38287 3.31057 6.95429 3.91762 7.51892C4.03372 7.62606 4.14817 7.73491 4.26427 7.84205C4.43842 8.00361 4.59433 7.99511 4.75024 7.81484C6.0622 6.29273 7.37581 4.76892 8.69108 3.24511C9.57844 2.2162 10.4691 1.18559 11.3565 0.154974C11.4659 0.0274235 11.5936 -0.0355017 11.7595 0.0206207C11.9005 0.0682398 12.005 0.197492 11.9983 0.348852C11.995 0.430485 11.9635 0.517219 11.9204 0.588648C10.9136 2.25872 9.90352 3.92538 8.89343 5.59375C7.73075 7.51552 6.56807 9.43559 5.40705 11.3557C5.2047 11.6907 4.92771 11.9186 4.54126 11.9815C4.10339 12.0529 3.73849 11.9084 3.45985 11.5597C2.46137 10.3131 1.46952 9.06144 0.474361 7.81314C0.288597 7.58014 0.0895646 7.35395 0.0364893 7.04273C0.0199032 6.95259 0.00995162 6.86246 0 6.78763Z' fill='#BD00E5' />
        </svg>
      </span>
      {children}
    </label>
  );
};

export default Checkbox;