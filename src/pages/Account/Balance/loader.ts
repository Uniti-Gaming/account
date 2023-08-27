import { defaultBalance } from '@/assets/data/fakeData';
import { getBalance } from '@/core/services/userService';

export const loader = async () => {
  try {
    return await getBalance();
  } catch {
    return defaultBalance;
  }
};
