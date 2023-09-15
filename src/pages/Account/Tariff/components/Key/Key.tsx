import { FC } from 'react';

import { keyesData } from './keyesData';
import { IUserKeys } from '@/core/interfaces/userInterface';
import styles from './Key.module.scss';

import LayoutBlock from '@/components/LayoutBlock/LayoutBlock';
import CardKey from '../CardKey/CardKey';

interface KeyProps {
  keys: IUserKeys;
}

const Key: FC<KeyProps> = ({ keys }) => {
  return (
    <LayoutBlock title='Ключи'>
      <div className={styles.container}>
        {keyesData.map((keyData, index) => (
          <CardKey
            key={index}
            title={keyData.title}
            image={keyData.image}
            password={keys[keyData.password]}
            description={keyData.description}
            login={keys.login}
          />
        ))}
      </div>
    </LayoutBlock>
  );
};

export default Key;