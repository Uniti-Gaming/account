import { FC } from 'react';

import { ISubscribeDetails } from '@/core/interfaces/userInterface';
import styles from './CurrentTariff.module.scss';

import FieldValuePair from '@/components/FieldValuePair/FieldValuePair';
import LayoutBlock from '@/components/LayoutBlock/LayoutBlock';

interface CurrentTariffProps {
  tariff: ISubscribeDetails | undefined;
  date: string;
}

const CurrentTariff: FC<CurrentTariffProps> = ({ tariff, date }) => {
  return (
    <LayoutBlock title='Текущий тариф'>
      <table className={styles.body}>
        <tbody>
          {tariff && (
            <FieldValuePair
              value={tariff.subscribe_name}
              label='Текущий тариф'
              underline
            />
          )}
          <FieldValuePair
            classValue={styles.active}
            value='Активен'
            label='Статус'
            underline
          />
          <FieldValuePair
            classValue={styles.data}
            value={date}
            label='Дата окончания тарифа'
          />
        </tbody>
      </table>
    </LayoutBlock>
  );
};

export default CurrentTariff;