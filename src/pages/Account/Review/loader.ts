import { getBalance, getTariff, getTransactions } from '@/core/services/userService';
import { checkVerification } from '@services/verificationService';

export const loader = async () => {
  try {
    const [
      verification,
      balance,
      transactions,
      tariff,
    ] = await Promise.all([
      checkVerification(),
      getBalance(),
      getTransactions(),
      getTariff(),
    ]);

    return { verification, balance, transactions, tariff };
  } catch (error) {
    const verification = {
      VerifyEmail: false,
      VerifyNumber: false,
      userDetails: false,
    };
    const balance = {
      main: 0,
      coins: 0,
      tickets: 0,
    };

    return { verification, balance, transactions: [] };
  }
};
