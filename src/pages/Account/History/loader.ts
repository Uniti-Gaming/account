import { getTransactions } from '@/core/services/userService';

export const loader = async () => {
  try {
    const transactions = await getTransactions();
    if (transactions instanceof Array) {
      return transactions;
    } else {
      return[];
    }
  } catch {
    return [];
  }
};
