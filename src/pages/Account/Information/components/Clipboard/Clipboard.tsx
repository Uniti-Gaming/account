import FieldValuePair from '@/components/FieldValuePair/FieldValuePair';
import styles from './Clipboard.module.scss';

interface ClipboardProps {
  value: string;
  label: string;
}

const Clipboard = ({ value, label }: ClipboardProps) => {
  const clipboardHundler = () => {
    navigator.clipboard.writeText(value);
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
            className={styles.button}
            onClick={clipboardHundler}
          />
        </>
      )}
    />
  );
};

export default Clipboard;