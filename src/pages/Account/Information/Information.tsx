import { useContext, useState } from 'react';

import { AuthContext } from '@/core/contexts/AuthContext';

import Account from './components/Account/Account';
import PrivateInfo from './components/PrivateInfo/PrivateInfo';
import BlockWithOneString from './components/BlockWithOneString/BlockWithOneString';
import Difrent from './components/Difrent/Difrent';
import UserPopups from './components/UserPopups/UserPopups';

const Information = () => {
  const { currentUser } = useContext(AuthContext);
  const [popupIsOpen, setPopupIsOpen] = useState({
    private: false,
    email: false,
    phone: false,
    lang: false,
    difrent: false,
  });
  const openPopup = (name: string) => {
    setPopupIsOpen({ ...popupIsOpen, [name]: true });
  };
  const closeAllPopups = () => {
    setPopupIsOpen({
      private: false,
      email: false,
      phone: false,
      lang: false,
      difrent: false,
    });
  };
  return (
    <>
      <UserPopups
        currentUser={currentUser}
        popupIsOpen={popupIsOpen}
        close={closeAllPopups}
      />
      <Account />
      <PrivateInfo
        name={currentUser.name}
        city={currentUser.city}
        handleClick={() => openPopup('private')} />
      <BlockWithOneString
        title='Электронная почта'
        handleClick={() => openPopup('email')}
        value={currentUser.email}
        label='Электронная почта:' />
      <BlockWithOneString
        title='Номер телефона'
        handleClick={() => openPopup('phone')}
        value={currentUser.phone}
        label='Номер телефона:' />
      <BlockWithOneString
        title='РАССЫЛКА ОТ UNITE GAMING'
        handleClick={() => openPopup('lang')}
        value={currentUser.lang}
        label='Предпочитаемый язык переписки:' />
      <Difrent
        sex={currentUser.difrent.sex}
        instagram={currentUser.difrent.instagram}
        tiktok={currentUser.difrent.tiktok}
        favorite={currentUser.difrent.favorite}
        handleClick={() => openPopup('difrent')} />
    </>
  );
};

export default Information;