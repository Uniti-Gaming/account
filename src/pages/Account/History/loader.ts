import { getTransactions } from '@/core/services/userService';
import { defaultTransactions } from '@/assets/data/fakeData';

export const loader = async () => {
  try {
    const transactions = await getTransactions();
    return transactions;
  } catch {
    return defaultTransactions;
  }
};
