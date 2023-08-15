import { FC } from 'react';

import { optionsAge, optionsDay, optionsMonth } from '@/assets/data/options';
import styles from './DateOfBirthSelects.module.scss';

import AuthSelect from '../AuthSelect/AuthSelect';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import AuthLabel from '../AuthLabel/AuthLabel';

interface DateOfBirthSelectsProps {
    values: {
        [key: string]: string;
    };
    errors: {
        [key: string]: string;
    };
    setValues: (values: { [key: string]: string }) => void;
    setErrors: (values: { [key: string]: string }) => void;
}

const DateOfBirthSelects: FC<DateOfBirthSelectsProps> = ({ values, setValues, errors, setErrors }) => {
  return (
    <AuthLabel text='Дата рождения' required>
      <div className={styles.wrapper}>
        <AuthSelect
          options={optionsDay}
          values={values}
          name='day'
          setValues={setValues}
          placeholder='День'
          error={!!errors.day}
          setErrors={setErrors}
          errors={errors}
        />
        <AuthSelect
          options={optionsMonth}
          values={values}
          name='month'
          setValues={setValues}
          placeholder='Месяц'
          error={!!errors.month}
          setErrors={setErrors}
          errors={errors}
        />
        <AuthSelect
          options={optionsAge}
          values={values}
          name='year'
          setValues={setValues}
          placeholder='Год'
          error={!!errors.year}
          setErrors={setErrors}
          errors={errors}
        />
      </div>
      <>
        {errors.day && <ErrorMessage message='Обязательное поле' />}
        {errors.year && !errors.day && <ErrorMessage message='Обязательное поле' />}
        {errors.month && !errors.year && !errors.day && <ErrorMessage message='Обязательное поле' />}
      </>
    </AuthLabel>
  );
};

export default DateOfBirthSelects;