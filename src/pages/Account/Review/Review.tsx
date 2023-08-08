import { useContext } from 'react';

import { AuthContext } from '@/core/contexts/AuthContext';

import Deposit from './components/Deposit/Deposit';
import History from './components/History/History';
import PromoCode from './components/PromoCode/PromoCode';
import Safety from './components/Safety/Safety';
import TariffBlock from './components/TariffBlock/TariffBlock';
import UserInfo from './components/UserInfo/UserInfo';

const Review = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <Safety safety={currentUser.safety} />
      <PromoCode />
      <Deposit balance={currentUser.balance} />
      <UserInfo currentUser={currentUser} />
      <TariffBlock />
      <History />
    </>
  );
};

export default Review;