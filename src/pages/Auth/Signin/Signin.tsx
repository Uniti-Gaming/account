import { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { signin } from '@services/authService';
import { getUser, getUserInfo } from '@/core/services/userService';
import { AuthContext } from '@/core/contexts/AuthContext';
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
  const navigate = useNavigate();
  const saveRef = useRef<HTMLInputElement | null>(null);
  const { login } = useContext(AuthContext);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [serverError, setServerError] = useState<boolean>(false);
  const { values, handleChange, errors, setErrors } = useFormWithValidation({
    email: '',
    password: '',
  });

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (serverError) setServerError(false);
    handleChange(evt);
  };

  const onSubmit = (evt: React.FormEvent) => {
    const form = evt.target as HTMLFormElement;
    if (form.checkValidity()) {
      setLoading(true);
      signin({
        email: values.email,
        password: values.password,
        checkbox: !!saveRef.current?.checked,
      })
        .then(() => {
          Promise.all([getUser(), getUserInfo()])
            .then(([user, userInfo]) => {
              login({ ...user, ...userInfo });
              navigate('/', { replace: true });
            });
        })
        .catch(async (error) => {
          if (error instanceof Response) {
            const errorData = await error.json();
            setErrors(errorData.errors);
          } else {
            setServerError(true);
          }
          setLoading(false);
        });
    } else {
      const newErrors: { [key: string]: string } = {};
      Object.keys(values).forEach(key => {
        if (values[key] === '') {
          newErrors[key] = 'Обязательное поле';
        }
      });
      setErrors(newErrors);
    }
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
            {errors.email && (<ErrorMessage message={errors.email} />)}
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
            {errors.password && (<ErrorMessage message={errors.password} />)}
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