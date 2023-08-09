import { useState } from 'react';

import { signin } from '@services/authService';
import { useForm } from '@/core/hooks/useForm';
// import styles from './Signin.module.scss';

// import Checkbox from '../../../components/ui/Checkbox';
import MainAuth from '../components/MainAuth/MainAuth';
import AuthInput from '../components/AuthInput/AuthInput';
import AuthLabel from '../components/AuthLabel/AuthLabel';
import AuthForm from '../components/AuthForm/AuthForm';

const Signin = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  
  const { values, handleChange } = useForm({});
  const onSubmit = () => {
    setLoading(true);
    signin({
      email: values.email,
      password: values.password,
    }).finally(() => {
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
            type='text'
            name='password'
            value={values.password || ''}
            onChange={handleChange}
            placeholder='Введите пароль'
          />
        </AuthLabel>
        {/* <div className={styles.wraper}>
          <Checkbox register={register}>
            <p>Запомнить меня</p>
          </Checkbox>
          <Link className={styles.forget} to='/forgot'>Забыли пароль?</Link>
        </div> */}
      </AuthForm>
    </MainAuth>
  );
};

export default Signin;