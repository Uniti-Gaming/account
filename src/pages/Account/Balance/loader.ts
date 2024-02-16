import { defaultBalance, defaultRates } from '@/assets/data/fakeData';
import { getRates } from '@services/managementService';
import { getBalance } from '@services/userService';

export const loader = async () => {
  try {
    const [
      balance,
      rates,
    ] = await Promise.all([
      getBalance(),
      getRates(),
    ]);
    return { balance, rates };
  } catch {
    return { rates: defaultRates, balance: defaultBalance };
  }
};
