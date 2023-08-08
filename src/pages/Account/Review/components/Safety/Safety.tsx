import { FC, useEffect, useState } from 'react';

import { calculateCircleLength } from '@utils/calculateCircleLength';
import { ISafety } from '@interfaces/userInterface';
import styles from './Safety.module.scss';

import LayoutBlock from '@/components/LayoutBlock/LayoutBlock';
import SafetyItem from '../SafetyItem/SafetyItem';

interface SafetyProps {
  safety: ISafety
}

const Safety: FC<SafetyProps> = ({ safety }) => {
  const [procent, setProcent] = useState<number>(25);

  useEffect(() => {
    const trueCount = Number(safety.number) + Number(safety.email) + Number(safety.other);
    setProcent(trueCount * 25 + 25);
  }, [safety]);

  return (
    <LayoutBlock
      title='Безопасность'
      link={{
        text: 'Безопасность >',
        path: '/account/safety',
      }}
    >
      <div className={styles.body}>
        <div className={styles.value}>
          <svg className={styles.progress}>
            <circle r={106} cx={110} cy={110} />
            <circle
              r={106}
              cx={110}
              cy={110}
              style={{
                strokeDashoffset: calculateCircleLength(procent),
              }}
            />
          </svg>
          <div className={styles.number}>
            <h5 className={styles.procent}>{procent}%</h5>
          </div>
        </div>
        <div className={styles.data}>
          <SafetyItem text='Регистрация аккаунта Пройдена' approved={true} />
          <SafetyItem text='Подтвердить Номер телефона' approved={safety.number} />
          <SafetyItem text='Подтвердить адрес электронной почты' approved={safety.email} />
          <SafetyItem text='Дополнительные поля не заполнены' approved={safety.other} />
        </div>
      </div>
    </LayoutBlock>
  );
};

export default Safety;