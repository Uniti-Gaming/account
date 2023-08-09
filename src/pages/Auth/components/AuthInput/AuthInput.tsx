import styles from './AuthInput.module.scss';


const AuthInput= ({ ...props }) => {
  return (
    <input {...props} className={styles.input} />
  );
};

export default AuthInput;