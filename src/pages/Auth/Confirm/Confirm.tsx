import { useState, useRef, useContext, FC } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '@/core/contexts/AuthContext';
import { title } from './text';
import styles from './Confirm.module.scss';

import Button from '@/components/Button/Button';
import LinkWithArrow from '@/components/LinkWithArrow/LinkWithArrow';
import MainAuth from '../components/MainAuth/MainAuth';
import AuthForm from '../components/AuthForm/AuthForm';
import ButtonWithTimer from '../components/ButtonWithTimer/ButtonWithTimer';
import { PinInput, IPinInputRef } from '../components/PinInput/PinInput';

interface ConfirmProps {
  type: 'phone' | 'email';
}

const Confirm: FC<ConfirmProps> = ({type}) => {
  const initialDigits = type ===  'phone' ? ['', '', '', ''] : ['', '', '', '', '', ''];
  const { currentUser } = useContext(AuthContext);
  const [digits, setDigits] = useState<string[]>(initialDigits);
  const ref = useRef<IPinInputRef>(null);
  const onSubmit = () => {
    console.log(digits);
  };
  return (
    <MainAuth text={{ title: title[type] }} >
      <p className={styles.text}>
        Введите проверочный код, отправленный на:
      </p>
      <p className={styles.mail}>{currentUser[type]}</p>
      <AuthForm
        handleSubmit={onSubmit}
        button='Далее'
        loading={false}
      >
        <label className='label'>
          <PinInput ref={ref} digits={digits} onChange={setDigits} />
        </label>
        <ButtonWithTimer />
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