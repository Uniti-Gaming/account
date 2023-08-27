import { FC } from 'react';

import styles from './InfoMessages.module.scss';
import succsesIcon from '@images/account/Subtract.svg';
import notSuccsesIcon from '@images/account/not-success.svg';

interface InfoMessagesProps {
    items: {
        message: string;
        success: boolean;
    }[];
}

const InfoMessages: FC<InfoMessagesProps> = ({items}) => {
  return (
    <ul className={styles.list}>
      {items.map((item, index) => (
        <li key={index} className={styles.item}>
          <img className={styles.icon} src={item.success ? succsesIcon : notSuccsesIcon} alt='статус сообщения' />
          <p className={styles.message}>{item.message}!</p>
        </li>
      ))}
    </ul>
  );
};

export default InfoMessages;