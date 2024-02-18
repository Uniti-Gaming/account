import { FC } from 'react';

import { filterHistoryOptions } from '@/assets/data/options';
import styles from './Filter.module.scss';

import { default as ReactSelect } from '@/components/PopupSelect/PopupSelect';
import { Button } from '../Button/Button';

interface IFilterProps {
    curentFilter: string;
    handleChange: (filter: string) => void;
}

export const Filter: FC<IFilterProps> = ({curentFilter, handleChange}) => {
  return (
    <div className={styles.filter}>
      <div className={styles.desktop}>
        <Button
          text='Все'
          isActive={curentFilter === 'all'}
          handleClick={() => handleChange('all')}
        />
        <Button
          text='Баланс'
          isActive={curentFilter === 'main'}
          handleClick={() => handleChange('main')}
        />
        <Button
          text='UG баллы'
          isActive={curentFilter === 'coins'}
          handleClick={() => handleChange('coins')}
        />
        <Button
          text='Билеты'
          isActive={curentFilter === 'tickets'}
          handleClick={() => handleChange('tickets')}
        />
      </div>
      <div className={styles.mobile}>
        <ReactSelect
          name='filter'
          values={{ filter: curentFilter }}
          options={filterHistoryOptions}
          setValues={(value) => handleChange(value.filter)}
        />
      </div>
    </div>
  );
};
