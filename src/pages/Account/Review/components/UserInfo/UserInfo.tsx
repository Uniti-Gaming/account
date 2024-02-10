import { FC } from 'react';

import { IUser } from '@interfaces/userInterface';
import styles from './UserInfo.module.scss';

import LayoutBlock from '@/components/LayoutBlock/LayoutBlock';
import FieldValuePair from '@/components/FieldValuePair/FieldValuePair';

interface UserInfoProps {
  currentUser: IUser;
}

const UserInfo: FC<UserInfoProps> = ({ currentUser }) => {
  const userInfo = [
    { label: 'ID:', value: currentUser.user_id },
    { label: 'Имя:', value: currentUser.name },
    { label: 'Телефон:', value: currentUser.number },
    { label: 'E-mail:', value: currentUser.email },
    { label: 'Реф. номер:', value: currentUser.user_ref },
  ];
  return (
    <LayoutBlock
      title='ваши данные'
      link={{
        text: 'Сведения об учётной записи >',
        path: '/information',
      }} >
      <table className={styles.body}>
        <tbody>
          {userInfo.map((item, index) => (
            <FieldValuePair key={index} label={item.label} value={item.value} />
          ))}
        </tbody>
      </table>
    </LayoutBlock>
  );
};

export default UserInfo;