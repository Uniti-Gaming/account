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
  const verifiedUser = useContext(VerifiedUserContext);
  const titleRef = useOutletContext() as React.RefObject<HTMLHeadingElement>;

  useEffect(() => {
    titleRef.current ? titleRef.current.textContent = 'Информация о записи' : null;
  }, [titleRef]);
  
  const pageData = [
    {
      title: 'Электронная почта',
      value: verifiedUser.email,
      label: 'Электронная почта',
      Popup: EmailPopup,
    },
    {
      title: 'Номер телефона',
      value: verifiedUser.number,
      label: 'Номер телефона',
      Popup: PhonePopup,
    },
    {
      title: 'РАССЫЛКА ОТ UNITE GAMING',
      value: 'Русский',
      label: 'Предпочитаемый язык переписки',
      Popup: LangPopup,
    },
  ];

  return (
    <>
      <AccountBlock id={verifiedUser.user_id} code={verifiedUser.user_ref} />
      <PrivateInfo name={verifiedUser.name} city={''} />
      {pageData.map((item, index) => (
        <BlockWithOneString key={index} {...item} />
      ))}
      <Difrent
        sex={''}
        instagram={''}
        tiktok={''}
        favorite={''}
      />
    </>
  );
};

export default Information;