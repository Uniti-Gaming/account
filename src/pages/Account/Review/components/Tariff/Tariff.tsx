import { FC } from 'react';

import LinkWithArrow from '@/components/LinkWithArrow/LinkWithArrow';
import styles from './Tariff.module.scss';

interface TariffProps {
    image: string;
    name: string;
    isActive: boolean;
    expiryDate?: string;
}

const Tariff: FC<TariffProps> = ({image, name, isActive, expiryDate}) => {
  return (
    <div className={styles.tariff}>
      <img className={styles.image} src={image} alt={`иконка тарифа ${name}`} />
      <div className={styles.wrapper}>
        <div>
          <h5 className={styles.name}>{name}</h5>
          <p className={styles.text}>Тариф</p>
        </div>
        <div>
          {isActive ? (
            <p className={styles.included}>Активен</p>
          ) : (
            <p className={styles.disabled}>Неактивен</p>
          )}
          <p className={styles.text}>Подробнее</p>
        </div>
        <div>
          {isActive && (
            <>
              <p className={styles.time}>{expiryDate}</p>
              <p className={styles.text}>Окончание периода подписки</p>
            </>
          )}
        </div>
        <LinkWithArrow
          text={isActive? 'Улучшить тариф' : 'Выбрать тариф'}
          path='/account/tariff' />
      </div>
    </div>
  );
};

export default Tariff;