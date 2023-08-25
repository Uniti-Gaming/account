import { FC, useEffect, useState } from 'react';

import { calculateCircleLength } from '@utils/calculateCircleLength';
import { IVerification } from '@interfaces/userInterface';
import styles from './Safety.module.scss';

import LayoutBlock from '@/components/LayoutBlock/LayoutBlock';
import SafetyItem from '../SafetyItem/SafetyItem';

interface SafetyProps {
  safety: IVerification;
}

const Safety: FC<SafetyProps> = ({ safety }) => {
  const [procent, setProcent] = useState<number>(25);

  useEffect(() => {
    const trueCount = Number(safety.VerifyEmail) + Number(safety.VerifyNumber) + Number(safety.userDetails);
    setProcent(trueCount * 25 + 25);
  }, [safety]);

  return (
    <LayoutBlock title='Безопасность'>
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
          <SafetyItem text={{ approved: 'Регистрация аккаунта Пройдена'}} approved />
          <SafetyItem
            text={{
              notApproved: 'Подтвердить номер телефона',
              approved: 'Номер телефона Подтверждён',
            }}
            approved={safety.VerifyNumber}
            path='/confirm-phone'
          />
          <SafetyItem
            text={{
              notApproved: 'Подтвердить электронную почту',
              approved: 'Адрес электронной почты Подтверждён ',
            }}
            approved={safety.VerifyEmail}
            path='/confirm-email'
          />
          <SafetyItem
            text={{
              notApproved: 'Дополнительные поля не заполнены',
              approved: 'Дополнительные поля заполнены',
            }}
            approved={safety.userDetails}
          />
        </div>
      </div>
    </LayoutBlock>
  );
};

export default Safety;