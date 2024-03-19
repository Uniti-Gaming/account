import { defaultTariff, defaultKeys, defaultBalance } from '@/assets/data/fakeData';
import { getTariff } from '@/core/services/managementService';
import { getBalance, getCurrentTariff, getUserKeys } from '@/core/services/userService';

export const loader = async () => {
  try {
    const [
      tariff,
      keys,
      currentTariff,
      balance,
    ] = await Promise.all([
      getTariff(),
      getUserKeys(),
      getCurrentTariff(),
      getBalance(),
    ]);
    return {
      tariff: tariff.subscribe_details,
      keys,
      currentTariff,
      balance,
    };
  } catch {
    return {
      tariff: defaultTariff.subscribe_details,
      keys: defaultKeys,
      balance: defaultBalance,
      currentTariff: { active_subscribe: false },
    };
  }
};
