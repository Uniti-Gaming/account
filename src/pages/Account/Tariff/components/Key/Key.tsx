// import { Dispatch, FC, SetStateAction } from 'react';
// import uniteGamingforAndroidImage from '../../../../../asets/images/profile/key/image 27.png';

import styles from './Key.module.scss';
import { keyesData } from './keyesData';

import LayoutBlock from '@/components/LayoutBlock/LayoutBlock';
import CardKey from '../CardKey/CardKey';

const Key = () => {
  return (
    <LayoutBlock title='Ключи'>
      <p className={styles.important}>
        !ВАЖНО! Логин ключа является ID пользователя зарегистрированного аккаунта в формате “UG-45-qwer”
      </p>
      <div className={styles.container}>
        {keyesData.map((keyData, index) => (
          <CardKey key={index} {...keyData} />
        ))}
      </div>
    </LayoutBlock>
  );
};

export default Key;