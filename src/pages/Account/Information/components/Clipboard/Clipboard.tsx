import FieldValuePair from '@/components/FieldValuePair/FieldValuePair';
import FieldValuePairWrapper from '@/components/FieldValuePairWrapperWithUnderLine/FieldValuePairWrapperWithUnderLine';
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
    <FieldValuePairWrapper>
      <FieldValuePair {...{ value, label }} />
      <button
        className={styles.button}
        onClick={clipboardHundler}
      />
    </FieldValuePairWrapper>
  );
};

export default Clipboard;