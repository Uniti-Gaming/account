import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import { useFormWithValidation } from '@hooks/useFormWithValidation';
import { forgotPassword } from '@/core/services/authService';
import styles from './Reset.module.scss';

import Button from '@/components/Button/Button';
import MainAuth from '../components/MainAuth/MainAuth';
import AuthForm from '../components/AuthForm/AuthForm';
import AuthInput from '../components/AuthInput/AuthInput';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import AuthLabel from '../components/AuthLabel/AuthLabel';
import LinkWithArrow from '@/components/LinkWithArrow/LinkWithArrow';

const Reset = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState('idle');
  const { values, handleChange, errors } = useFormWithValidation({});

  const handleSubmit = () => {
    setStatus('loading');
    forgotPassword(values.email)
      .then(() => {
        setStatus('success');
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <MainAuth text={{ title: 'Сброс пароля' }}>
      {status === 'success' ? (
        <div className={styles.success}>
          <p className={classNames(styles.text, styles.disabled)}>
            Инструкции для сброса пароля были отправленны на:
          </p>
          <p className={styles.email}>{values.email}</p>
          <p className={styles.text}>
            Проверьте вашу электронную почту и следуйте инструкциям по сбросу пароля.
          </p>
          <p className={styles.text}>
            Если вы не получили письмо, проверьте папку "Спам" или повторите попытку."
          </p>
          <div className={styles.wrapper}>
            <LinkWithArrow text='Обратиться в службу поддержки' path='/suport' />
          </div>
        </div>
      ) : (
        <>
          <p className={styles.text}>
            Введите электронный адрес вашей учётной записи Unite Gaming
          </p>
          <AuthForm
            loading={status === 'loading'}
            handleSubmit={handleSubmit}
            button='Далее'
          >
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
            handleClick={() => navigate(-1)}
            style={{ backgroundColor: 'transparent' }}
          />
        </>
      )}
    </MainAuth>
  );
};

export default Reset;