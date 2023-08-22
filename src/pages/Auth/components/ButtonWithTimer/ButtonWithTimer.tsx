import { FC, useEffect, useState } from 'react';

import repeatIcon from '@images/repeat.svg';
import styles from './ButtonWithTimer.module.scss';

const formatTime = (time: number): string => {
  if (time && !isNaN(time)) {
    const minutes: number = Math.floor(time / 60);
    const formatMinutes: string =
      minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds: number = Math.floor(time % 60);
    const formatSeconds: string =
      seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${formatMinutes}:${formatSeconds}`;
  }
  return '00:00';
};

interface ButtonWithTimerProps {
  time: number;
  handleClick: () => void;
}

const ButtonWithTimer: FC<ButtonWithTimerProps> = ({ time, handleClick }) => {
  const [timer, setTimer] = useState(time);

  useEffect(() => {
    if (timer === 0) return;
    const intervalId = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  const onClick = () => {
    setTimer(time);
    handleClick();
  };

  return (
    <button
      className={styles.button}
      disabled={!!timer}
      style={{ cursor: timer ? 'not-allowed' : 'pointer' }}
      onClick={onClick}
    >
      {timer ? formatTime(timer) : 'Запросить код заново'}
      {!timer && (<img src={repeatIcon} alt='Запросить код заново' />)}
    </button>
  );
};

export default ButtonWithTimer;