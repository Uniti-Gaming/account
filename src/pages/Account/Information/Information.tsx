import { useContext, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import { VerifiedUserContext } from '@/core/contexts/VerifiedUserContext';

import AccountBlock from './components/AccountBlock/AccountBlock';
import Difrent from './components/Difrent/Difrent';
import PrivateInfo from './components/PrivateInfo/PrivateInfo';
import BlockWithOneString from './components/BlockWithOneString/BlockWithOneString';
import EmailPopup from './components/EmailPopup/EmailPopup';
import PhonePopup from './components/PhonePopup/PhonePopup';
import LangPopup from './components/LangPopup/LangPopup';

const Information = () => {
  const { currentUser } = useContext(VerifiedUserContext);
  const titleRef = useOutletContext() as React.RefObject<HTMLHeadingElement>;

  useEffect(() => {
    titleRef.current ? titleRef.current.textContent = 'Информация о записи' : null;
  }, [titleRef]);
  
  const pageData = [
    {
      title: 'Электронная почта',
      value: currentUser.email,
      label: 'Электронная почта',
      Popup: EmailPopup,
    },
    {
      title: 'Номер телефона',
      value: currentUser.number,
      label: 'Номер телефона',
      Popup: PhonePopup,
    },
    {
      title: 'РАССЫЛКА ОТ UNITE GAMING',
      value: currentUser.prefer_lang,
      label: 'Предпочитаемый язык переписки',
      Popup: LangPopup,
    },
  ];

  return (
    <>
      <AccountBlock id={currentUser.user_id} code={currentUser.user_ref} />
      <PrivateInfo name={currentUser.name} city={currentUser.city} />
      {pageData.map((item, index) => (
        <BlockWithOneString key={index} {...item} />
      ))}
      <Difrent
        sex={currentUser.gender}
        instagram={currentUser.instagram}
        tiktok={currentUser.tiktok}
        favorite={currentUser.love_service}
      />
    </>
  );
};

export default Information;