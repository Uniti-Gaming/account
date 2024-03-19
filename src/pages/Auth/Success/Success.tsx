import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import succesIcon from '@images/account/Subtract.svg';
import { text } from './text';
import styles from './Success.module.scss';

import MainAuth from '../components/MainAuth/MainAuth';
import LinkWithArrow from '@/components/LinkWithArrow/LinkWithArrow';

interface SuccessProps {
  type: 'phone' | 'email' | 'password';
}


const Success: FC<SuccessProps> = ({type}) => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate('/'), 5000);
  });

  return (
    <MainAuth text={{ title: 'Успех!' }} >
      <img className={styles.icon} src={succesIcon} alt='Успех' />
      <p className={styles.text}>{text[type]}</p>
      <LinkWithArrow text='Вернуться в личный кабинет' path='/' />
    </MainAuth>
  );
};

export default Success;