import styles from './Popup.module.scss';

interface PopupProps {
    children: JSX.Element | JSX.Element[]
    isOpen: boolean
    handleClose: () => void;
}

const Popup = ({ isOpen, children, handleClose }: PopupProps) => {
  return (
    <div
      className={`${styles.popup} ${isOpen && styles.open}`}
      onClick={handleClose}
    >
      <div onClick={(evt) => evt.stopPropagation()} className={styles.container}>
        {children}
      </div>
    </div>
  );
};

export default Popup;