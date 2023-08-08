import classNames from 'classnames';

import styles from './FieldValuePair.module.scss';

interface FieldValuePairProps {
    classValue?: string
    value: string;
    label: string;
  }

const FieldValuePair = ({value, label, classValue}: FieldValuePairProps) => {
  return (
    <>
      <p className={styles.label}>{label}</p>
      <p className={classNames(styles.value, classValue)}>{value}</p>
    </>
  );
};

export default FieldValuePair;