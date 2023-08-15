import { useForm } from '@/core/hooks/useForm';

import MainAuth from '../components/MainAuth/MainAuth';
import AuthForm from '../components/AuthForm/AuthForm';
import AuthLabel from '../components/AuthLabel/AuthLabel';
import PasswordInput from '../components/PasswordInput/PasswordInput';

const NewPassword = () => {
  const { values, handleChange } = useForm({});
  const onSubmit = () => { };

  return (
    <MainAuth text={{ title: 'Новый пароля' }}>
      <AuthForm
        handleSubmit={onSubmit}
        button='Сохранить'
        loading={false}
      >
        <AuthLabel text='Новый пароль*'>
          <PasswordInput
            onChange={handleChange}
            name='password'
            placeholder='Введите новый пароль'
            value={values.password || ''}
          />
        </AuthLabel>
        <AuthLabel text='Подтвердите новый пароль*'>
          <PasswordInput
            onChange={handleChange}
            name='password2'
            placeholder='Повторите пароль'
            value={values.password2 || ''}
          />
        </AuthLabel>
      </AuthForm>

    </MainAuth>
  );
};

export default NewPassword;