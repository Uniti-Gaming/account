import classNames from 'classnames';
import { ReactElement } from 'react';

import styles from './FieldValuePair.module.scss';

interface FieldValuePairProps {
    classValue?: string
    underline?: boolean
    value: string | ReactElement;
    label: string;
  }

const FieldValuePair = ({value, label, classValue, underline}: FieldValuePairProps) => {
  return (
    <tr className={classNames({[styles.underline]: underline})}>
      <th className={styles.label}>{label}</th>
      <td className={classNames(styles.value, classValue)}>{value}</td>
    </tr>
  );
};

export default FieldValuePair;