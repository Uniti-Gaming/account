
import repeatIcon from '@images/repeat.svg';
import styles from './ButtonWithTimer.module.scss';

const ButtonWithTimer = () => {
  return (
    <button className={styles.button}>
      Запросить код заново
      <img src={repeatIcon} alt='Запросить код заново' />
    </button>
  );
};

export default ButtonWithTimer;