import styles from './LabelForPopupInput.module.scss';

interface LabelForPopupInputProps {
    children: JSX.Element
    name: string
}

const LabelForPopupInput = ({ children, name }: LabelForPopupInputProps) => {
  return (
    <label className={styles.label}>
      <p className={styles.name}>{name}</p>
      {children}
    </label>
  );
};

export default LabelForPopupInput;