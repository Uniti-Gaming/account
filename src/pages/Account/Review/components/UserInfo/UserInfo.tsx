import { FC } from 'react';

import { IUser } from '@interfaces/userInterface';
import styles from './UserInfo.module.scss';

import LayoutBlock from '@/components/LayoutBlock/LayoutBlock';
import UserInfoItem from '../UserInfoItem/UserInfoItem';

interface UserInfoProps {
  currentUser: IUser;
}

const UserInfo: FC<UserInfoProps> = ({currentUser}) => {
  const userInfo = [
    { label: 'ID:', value: currentUser.user_id },
    { label: 'Имя:', value: currentUser.name },
    { label: 'Телефон:', value: currentUser.number },
    { label: 'Электронная почта:', value: currentUser.email },
    { label: 'Реферальный номер:', value: currentUser.user_ref },
  ];
  return (
    <LayoutBlock
      title='ваши данные'
      link={{
        text: 'Сведения об учётной записи >',
        path: '/information',
      }} >
      <div className={styles.body}>
        {userInfo.map((item, index) => (
          <UserInfoItem key={index} label={item.label} value={item.value} />
        ))}
      </div>
    </LayoutBlock>
  );
};

export default UserInfo;