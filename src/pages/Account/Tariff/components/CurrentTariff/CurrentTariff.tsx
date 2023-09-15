import { FC } from 'react';

import { ISubscribeDetail } from '@/core/interfaces/userInterface';
import styles from './CurrentTariff.module.scss';

import FieldValuePair from '@/components/FieldValuePair/FieldValuePair';
import FieldValuePairWrapperWithUnderLine from
  '@/components/FieldValuePairWrapperWithUnderLine/FieldValuePairWrapperWithUnderLine';
import LayoutBlock from '@/components/LayoutBlock/LayoutBlock';

interface CurrentTariffProps {
  tariff: ISubscribeDetail | undefined;
  date: string;
}

const CurrentTariff: FC<CurrentTariffProps> = ({ tariff, date }) => {
  return (
    <LayoutBlock title='Текущий тариф'>
      <div className={styles.body}>
        <FieldValuePairWrapperWithUnderLine>
          <>
            {tariff && (
              <FieldValuePair
                value={`${tariff.subscribe_name} - ${tariff.subscribe_price_1}ТМТ/месяц`}
                label='Текущий тариф' />
            )}
          </>
        </FieldValuePairWrapperWithUnderLine>
        <FieldValuePairWrapperWithUnderLine>
          <FieldValuePair
            classValue={styles.active}
            value='Активен'
            label='Статус' />
        </FieldValuePairWrapperWithUnderLine>
        <FieldValuePairWrapperWithUnderLine>
          <FieldValuePair
            classValue={styles.data}
            value={date}
            label='Дата окончания тарифа' />
        </FieldValuePairWrapperWithUnderLine>
      </div>
    </LayoutBlock>
  );
};

export default CurrentTariff;