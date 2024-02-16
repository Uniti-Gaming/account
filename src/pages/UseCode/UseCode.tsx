import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { applyPromocode } from '@services/userService';
import { useFormWithValidation } from '@hooks/useFormWithValidation';
import styles from './UseCode.module.scss';

import Button from '@/components/Button/Button';
import MainAuth from '../Auth/components/MainAuth/MainAuth';
import AuthForm from '../Auth/components/AuthForm/AuthForm';
import AuthInput from '../Auth/components/AuthInput/AuthInput';
import ErrorMessage from '../Auth/components/ErrorMessage/ErrorMessage';
import AuthLabel from '../Auth/components/AuthLabel/AuthLabel';
import LinkWithArrow from '@/components/LinkWithArrow/LinkWithArrow';
import InfoMessages from '@/components/InfoMessages/InfoMessages';

const UseCode = () => {
  const navigate = useNavigate();
  const { values, handleChange, errors } = useFormWithValidation({});
  const [loading, setLoading] = useState(false);
  const [infoMessagesList, setInfoMessagesList] = useState<{ message: string, success: boolean }[]>([]);

  const addInfoMessage = (data: { message: string, success: boolean }) => {
    setInfoMessagesList([...infoMessagesList, data]);
    setTimeout(() => {
      setInfoMessagesList(prevInfoMessagesList =>
        prevInfoMessagesList.filter(message => message !== data),
      );
    }, 5000);
  };

  const handleSubmitPromocode = () => {
    setLoading(true);
    applyPromocode(values.code)
      .then((res) => addInfoMessage(res))
      .catch(async (error) => {
        if (error instanceof Response) {
          const errorData = await error.json();
          addInfoMessage(errorData);
        } else {
          addInfoMessage({ message: 'Что-то пошло не так', success: false });
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <MainAuth text={{ title: 'Использовать код' }}>
      <>{infoMessagesList.length > 0 && (<InfoMessages items={infoMessagesList} />)}</>
      <p className={styles.text}>
        Здесь вы можете использовать код для пополнения кошелька Unite Gaming с помощью подарочной карты.
      </p>
      <AuthForm
        loading={loading}
        handleSubmit={handleSubmitPromocode}
        button='Использовать код'
      >
        <AuthLabel text='Промокод'>
          <AuthInput
            type='text'
            name='code'
            value={values.code || ''}
            onChange={handleChange}
            placeholder='Введите код'
            error={!!errors.code}
            required
          />
          <ErrorMessage message={errors.code} />
        </AuthLabel>
      </AuthForm>
      <Button
        type='button'
        text='Отмена'
        fullPage={true}
        className={styles.cancel}
        handleClick={() => navigate(-1)}
      />
      <LinkWithArrow text='Не знаете, где взять код?' path='/suport' />
    </MainAuth>
  );
};

export default UseCode;