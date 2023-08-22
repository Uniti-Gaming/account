import { useState, useRef, FC } from 'react';
import { Link } from 'react-router-dom';

import { IUser } from '@interfaces/userInterface';
import { title } from './text';
import styles from './Confirm.module.scss';

import Button from '@/components/Button/Button';
import LinkWithArrow from '@/components/LinkWithArrow/LinkWithArrow';
import MainAuth from '../components/MainAuth/MainAuth';
import AuthForm from '../components/AuthForm/AuthForm';
import ButtonWithTimer from '../components/ButtonWithTimer/ButtonWithTimer';
import { PinInput, IPinInputRef } from '../components/PinInput/PinInput';
import { checkCode } from '@/core/services/verificationService';

interface ConfirmProps {
  type: 'number' | 'email';
  verifiedUser: IUser;
}

const Confirm: FC<ConfirmProps> = ({type, verifiedUser}) => {
  const initialDigits = type ===  'number' ? ['', '', '', ''] : ['', '', '', '', '', ''];
  const [digits, setDigits] = useState<string[]>(initialDigits);
  const ref = useRef<IPinInputRef>(null);
  const onSubmit = () => {
    console.log(digits);
  };

  const resendCode = () => {
    checkCode(type);
  };

  return (
    <MainAuth text={{ title: title[type] }} >
      <p className={styles.text}>
        Введите проверочный код, отправленный на:
      </p>
      <p className={styles.mail}>{verifiedUser[type]}</p>
      <AuthForm
        handleSubmit={onSubmit}
        button='Далее'
        loading={false}
      >
        <label className='label'>
          <PinInput ref={ref} digits={digits} onChange={setDigits} />
        </label>
        <ButtonWithTimer
          time={type === 'number' ? 120 : 60}
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