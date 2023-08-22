import { useContext } from 'react';
import { useLoaderData, useOutletContext } from 'react-router-dom';

import { VerifiedUserContext } from '@/core/contexts/VerifiedUserContext';
import { IBalance, IVerification } from '@interfaces/userInterface';

import Deposit from './components/Deposit/Deposit';
import History from './components/History/History';
import PromoCode from './components/PromoCode/PromoCode';
import Safety from './components/Safety/Safety';
import TariffBlock from './components/TariffBlock/TariffBlock';
import UserInfo from './components/UserInfo/UserInfo';

interface ReviewLoaderData {
  verification: IVerification;
  balance: IBalance
}

const Review = () => {
  const { verification, balance } = useLoaderData() as ReviewLoaderData;
  const verifiedUser = useContext(VerifiedUserContext);
  const titleRef = useOutletContext() as React.RefObject<HTMLHeadingElement>;
  titleRef.current ? titleRef.current.textContent = 'Обзор учётной записи' : null;

  return (
    <>
      <Safety safety={verification} />
      <PromoCode />
      <Deposit balance={balance} />
      <UserInfo currentUser={verifiedUser} />
      <TariffBlock />
      <History />
    </>
  );
};

export default Review;