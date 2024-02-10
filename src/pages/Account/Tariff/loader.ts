import { defaultTariff, defaultKeys } from '@/assets/data/fakeData';
import { getTariff } from '@/core/services/managementService';
import { getCurrentTariff, getUserKeys } from '@/core/services/userService';

export const loader = async () => {
  try {
    const [
      tariff,
      keys,
      currentTariff,
    ] = await Promise.all([
      getTariff(),
      getUserKeys(),
      getCurrentTariff(),
    ]);
    return {
      tariff: tariff.subscribe_details,
      keys,
      currentTariff,
    };
  } catch {
    return {
      tariff: defaultTariff.subscriptions,
      keys: defaultKeys,
      currentTariff: { active_subscribe: '236963', expiry_date: '28.06.2023' },
    };
  }
};
