import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { signin } from '@services/authService';
import { useFormWithValidation } from '@hooks/useFormWithValidation';
import styles from './Signin.module.scss';

import Checkbox from '@/components/Checkbox/Checkbox';
import MainAuth from '../components/MainAuth/MainAuth';
import AuthInput from '../components/AuthInput/AuthInput';
import AuthLabel from '../components/AuthLabel/AuthLabel';
import AuthForm from '../components/AuthForm/AuthForm';
import PasswordInput from '../components/PasswordInput/PasswordInput';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const Signin = () => {
  const saveRef = useRef<HTMLInputElement | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [serverError, setServerError] = useState<boolean>(false);
  const { values, handleChange, errors, isValid } = useFormWithValidation({});

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if(serverError) setServerError(false);
    handleChange(evt);
  };
  
  const onSubmit = () => {
    setLoading(true);
    signin({
      email: values.email,
      password: values.password,
      checkbox: !!saveRef.current?.checked,
    })
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        setServerError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <MainAuth
      link='/signup'
      text={{
        title: 'Войдите в платформу Unite-Gaming',
        footnote: 'Нет аккаунта?',
        link: 'Регистрация',
      }} >
      <AuthForm
        loading={isLoading}
        handleSubmit={onSubmit}
        button='Войти в систему'
        isValid={isValid}
      >
        <AuthLabel text='E-mail'>
          <AuthInput
            type='email'
            name='email'
            value={values.email || ''}
            onChange={onChange}
            placeholder='Введите адрес электронной почты'
            error={!!errors.email || serverError}
          />
          <>
            {serverError && (<ErrorMessage message='Неверный адрес электронной почты' />)}
          </>
          <ErrorMessage message={errors.email} />
        </AuthLabel>
        <AuthLabel text='Пароль'>
          <PasswordInput
            onChange={onChange}
            name='password'
            placeholder='Введите пароль'
            value={values.password || ''}
            error={!!errors.password || serverError}
          />
          <>
            {serverError && (<ErrorMessage message='Неверный пароль' />)}
          </>
          <ErrorMessage message={errors.password} />
        </AuthLabel>
        <div className={styles.wraper}>
          <Checkbox chekboxRef={saveRef}>
            <p>Запомнить меня</p>
          </Checkbox>
          <Link className={styles.forget} to='/forgot'>Забыли пароль?</Link>
        </div>
      </AuthForm>
    </MainAuth>
  );
};

export default Signin;