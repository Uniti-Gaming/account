import { useState } from 'react';

import FieldValuePair from '@/components/FieldValuePair/FieldValuePair';
import styles from './Clipboard.module.scss';
import classNames from 'classnames';

interface ClipboardProps {
  value: string;
  label: string;
}

const Clipboard = ({ value, label }: ClipboardProps) => {
  const [copid, setCopid] = useState(false);
  const clipboardHundler = () => {
    navigator.clipboard.writeText(value)
      .then(() => {
        setCopid(true);
        setTimeout(() => {
          setCopid(false);
        }, 3000);
      });
  };

  return (
    <FieldValuePair
      underline
      classValue={styles.hasButton}
      label={label}
      value={(
        <>
          {value}
          <button
            className={classNames(styles.button, { [styles.copied]: copid })}
            onClick={clipboardHundler}
          />
        </>
      )}
    />
  );
};

export default Clipboard;