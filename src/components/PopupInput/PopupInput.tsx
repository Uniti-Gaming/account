import styles from './PopupInput.module.scss';

interface PopupInputProps {
    type: 'text' | 'email' | 'phone'
    placeholder: string
    value: string
    name: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const PopupInput = ({ type, placeholder, value, handleChange, name }: PopupInputProps) => {
  return (
    <>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={handleChange}
      />
    </>
  );
};

export default PopupInput;