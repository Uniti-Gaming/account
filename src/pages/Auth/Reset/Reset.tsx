import { useFormWithValidation } from '@hooks/useFormWithValidation';
import styles from './Reset.module.scss';

import Button from '@/components/Button/Button';
import MainAuth from '../components/MainAuth/MainAuth';
import AuthForm from '../components/AuthForm/AuthForm';
import AuthInput from '../components/AuthInput/AuthInput';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import AuthLabel from '../components/AuthLabel/AuthLabel';
import LinkWithArrow from '@/components/LinkWithArrow/LinkWithArrow';

const Reset = () => {
  const { values, handleChange, errors } = useFormWithValidation({});
  return (
    <MainAuth text={{ title: 'Сброс пароля' }}>
      <p className={styles.text}>Введите электронный адрес вашей учётной записи Unite Gaming</p>
      <AuthForm loading={false} handleSubmit={() => {}} button='Далее'>
        <AuthLabel text=''>
          <AuthInput
            type='email'
            name='email'
            value={values.email || ''}
            onChange={handleChange}
            placeholder='Введите адрес электронной почты'
            error={!!errors.email}
            required
          />
          <ErrorMessage message={errors.email} />
        </AuthLabel>
        <div className={styles.wrapper}>
          <LinkWithArrow text='Обратиться в службу поддержки' path='/suport' />
        </div>
      </AuthForm>
      <Button
        type='button'
        text='Назад'
        fullPage={true}
        style={{ backgroundColor: 'transparent' }}
      />
    </MainAuth>
  );
};

export default Reset;