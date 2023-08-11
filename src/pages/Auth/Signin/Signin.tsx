import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { signin } from '@services/authService';
import { useForm } from '@/core/hooks/useForm';
import styles from './Signin.module.scss';
import eye from '@images/eye.svg';
import eyeSlash from '@images/eye-slash.svg';

import Checkbox from '@/components/Checkbox/Checkbox';
import MainAuth from '../components/MainAuth/MainAuth';
import AuthInput from '../components/AuthInput/AuthInput';
import AuthLabel from '../components/AuthLabel/AuthLabel';
import AuthForm from '../components/AuthForm/AuthForm';
import InputButton from '../components/InputButton/InputButton';

const Signin = () => {
  const saveRef = useRef<HTMLInputElement | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [showPass, setShowPass] = useState<boolean>(false);

  const { values, handleChange } = useForm({});
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
          <InputButton handleClick={() => setShowPass(!showPass)}>
            <img src={showPass ? eye : eyeSlash} alt='иконка с глазом' />
          </InputButton>
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