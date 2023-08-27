import { defaultTariff } from '@/assets/data/fakeData';
import { getTariff } from '@/core/services/userService';

export const loader = async () => {
  try {
    return await getTariff();
  } catch {
    return defaultTariff;
  }
};
