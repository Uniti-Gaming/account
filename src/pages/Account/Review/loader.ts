import { getBalance, getCurrentTariff, getTransactions } from '@/core/services/userService';
import { checkVerification } from '@services/verificationService';
import { defaultBalance, defaultTariff, defaultVerification } from '@/assets/data/fakeData';
import { getTariff } from '@/core/services/managementService';

export const loader = async () => {
  try {
    const [
      verification,
      balance,
      transactions,
      tariff,
      currentTariff,
    ] = await Promise.all([
      checkVerification(),
      getBalance(),
      getTransactions(),
      getTariff(),
      getCurrentTariff(),
    ]);

    return {
      verification,
      balance,
      transactions,
      tariff:
      tariff.subscribe_details,
      currentTariff,
    };
  } catch {
    return {
      verification: defaultVerification,
      balance: defaultBalance,
      transactions: [],
      tariff: defaultTariff.subscribe_details,
      currentTariff: { active_subscribe: false },
    };
  }
};
