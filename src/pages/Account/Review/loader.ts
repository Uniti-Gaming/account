import { getBalance, getTariff, getTransactions } from '@/core/services/userService';
import { checkVerification } from '@services/verificationService';
import { defaultBalance, defaultTariff, defaultTransactions, defaultVerification } from '@/assets/data/fakeData';

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
  } catch {
    return {
      verification: defaultVerification,
      balance: defaultBalance,
      transactions: defaultTransactions,
      tariff: defaultTariff,
    };
  }
};
