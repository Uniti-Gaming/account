import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { signin } from '@services/authService';
import { useForm } from '@/core/hooks/useForm';
import styles from './Signin.module.scss';

import Checkbox from '@/components/Checkbox/Checkbox';
import MainAuth from '../components/MainAuth/MainAuth';
import AuthInput from '../components/AuthInput/AuthInput';
import AuthLabel from '../components/AuthLabel/AuthLabel';
import AuthForm from '../components/AuthForm/AuthForm';

const Signin = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [showPass, setShowPass] = useState<boolean>(false);

  const { values, handleChange } = useForm({});
  const onSubmit = () => {
    setLoading(true);
    signin({
      email: values.email,
      password: values.password,
    })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <MainAuth
      link='/sign-up'
      text={{
        title: 'Войдите в платформу Unite-Gaming',
        footnote: 'Нет аккаунта?',
        link: 'Регистрация',
      }} >
      <AuthForm loading={isLoading} handleSubmit={onSubmit} button='Войти в систему'>
        <AuthLabel text='E-mail'>
          <AuthInput
            type='text'
            name='email'
            value={values.email || ''}
            onChange={handleChange}
            placeholder='Введите адрес электронной почты'
          />
        </AuthLabel>
        <AuthLabel text='Пароль'>
          <AuthInput
            type={showPass? 'text' : 'password'}
            name='password'
            value={values.password || ''}
            onChange={handleChange}
            placeholder='Введите пароль'
          />
          <button
            type='button'
            className={classNames(styles.buttonShowPass, {[styles.active]: showPass})}
            onClick={() => setShowPass(!showPass)}
          />
        </AuthLabel>
        <div className={styles.wraper}>
          <Checkbox>
            <p>Запомнить меня</p>
          </Checkbox>
          <Link className={styles.forget} to='/forgot'>Забыли пароль?</Link>
        </div>
      </AuthForm>
    </MainAuth>
  );
};

export default Signin;