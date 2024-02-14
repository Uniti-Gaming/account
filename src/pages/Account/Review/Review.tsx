import { useContext, useState } from 'react';
import { useLoaderData, useOutletContext } from 'react-router-dom';

import { VerifiedUserContext } from '@/core/contexts/VerifiedUserContext';
import { IBalance, ITariff, ITransaction, IVerification } from '@interfaces/userInterface';
import { applyPromocode, getBalance } from '@services/userService';

import Deposit from '@/components/Deposit/Deposit';
import InfoMessages from '@/components/InfoMessages/InfoMessages';
import History from './components/History/History';
import PromoCode from './components/PromoCode/PromoCode';
import Safety from './components/Safety/Safety';
import TariffBlock from './components/TariffBlock/TariffBlock';
import UserInfo from './components/UserInfo/UserInfo';

interface ReviewLoaderData {
  verification: IVerification;
  balance: IBalance;
  transactions: ITransaction[];
  tariff: ITariff;
}

const Review = () => {
  const { verification, balance, transactions, tariff } = useLoaderData() as ReviewLoaderData;
  const {currentUser} = useContext(VerifiedUserContext);
  const titleRef = useOutletContext() as React.RefObject<HTMLHeadingElement>;
  titleRef.current ? titleRef.current.textContent = 'Обзор учётной записи' : null;
  const [promocodeIsLoading, setPromocodeIsLoading] = useState<boolean>(false);
  const [userBalance, setUserBalance] = useState<IBalance>(balance);
  const [infoMessagesList, setInfoMessagesList] = useState<{ message: string, success: boolean }[]>([]);

  const handleSubmitPromocode = (code: string) => {
    setPromocodeIsLoading(true);
    applyPromocode(code)
      .then((res) => {
        setInfoMessagesList([...infoMessagesList, res]);
        setTimeout(() => {
          setInfoMessagesList(prevInfoMessagesList =>
            prevInfoMessagesList.filter(message => message !== res),
          );
        }, 5000);
        getBalance()
          .then((res) => setUserBalance(res));
      })
      .catch(async (error) => {
        if (error instanceof Response) {
          const errorData = await error.json();
          setInfoMessagesList([...infoMessagesList, errorData]);
          setTimeout(() => {
            setInfoMessagesList(prevInfoMessagesList =>
              prevInfoMessagesList.filter(message => message !== errorData),
            );
          }, 5000);
        }
      })
      .finally(() => setPromocodeIsLoading(false));
  };
  

  return (
    <>
      {infoMessagesList.length > 0 && (<InfoMessages items={infoMessagesList} />)}
      <Safety safety={verification} />
      <PromoCode handleSubmit={handleSubmitPromocode} isLoading={promocodeIsLoading} />
      <Deposit balance={userBalance} />
      <UserInfo currentUser={currentUser} />
      <TariffBlock tariff={tariff} />
      <History transactions={transactions} />
    </>
  );
};

export default Review;