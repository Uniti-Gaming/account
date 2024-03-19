import { useState, useRef, FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { checkCode, resendEmailVerification, resendNumberVerification } from '@services/verificationService';
import { IUser } from '@interfaces/userInterface';
import { data } from './data';
import styles from './Confirm.module.scss';

import Button from '@/components/Button/Button';
import LinkWithArrow from '@/components/LinkWithArrow/LinkWithArrow';
import MainAuth from '../components/MainAuth/MainAuth';
import AuthForm from '../components/AuthForm/AuthForm';
import ButtonWithTimer from '../components/ButtonWithTimer/ButtonWithTimer';
import { PinInput, IPinInputRef } from '../components/PinInput/PinInput';

interface ConfirmProps {
  type: 'number' | 'email';
  verifiedUser: IUser;
}

const Confirm: FC<ConfirmProps> = ({ type, verifiedUser }) => {
  const navigate = useNavigate();
  const [digits, setDigits] = useState<string[]>(data.initialDigits[type]);
  const [status, setStatus] = useState('idle');
  const ref = useRef<IPinInputRef>(null);
  const onSubmit = () => {
    setStatus('loading');
    checkCode(type, digits.join(''))
      .then((res) => {
        if (res.success) {
          setStatus('success');
          navigate(`/success-${type}`, { replace: true });
        } else {
          setStatus('error');
        }
      })
      .catch(() => setStatus('error'));
  };

  const resendCode = () => {
    type === 'email' ? resendEmailVerification() : resendNumberVerification();
  };

  return (
    <MainAuth text={{ title: data.title[type] }} >
      <p className={styles.text}>
        Введите проверочный код, отправленный на:
      </p>
      <p className={styles.mail}>{verifiedUser[type]}</p>
      <AuthForm
        handleSubmit={onSubmit}
        button='Далее'
        loading={status === 'loading'}
      >
        <label className='label'>
          <PinInput ref={ref} digits={digits} onChange={setDigits} error={status === 'error'} />
        </label>
        <ButtonWithTimer
          time={data.time[type]}
          handleClick={resendCode}
        />
      </AuthForm>
      <Link className={styles.cancel} to='/'>
        <Button
          type='button'
          text='Отмена'
          fullPage={true}
          style={{ backgroundColor: 'transparent' }}
        />
      </Link>
      <LinkWithArrow text='Обратиться в службу поддержки' path='/suport' />
    </MainAuth>
  );
};

export default Confirm;