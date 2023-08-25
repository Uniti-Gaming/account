import { getBalance } from '@/core/services/userService';

export const loader = async () => {
  try {
    const balance = await getBalance();
    return balance;
  } catch {
    const balance = {
      main: 0,
      coins: 0,
      tickets: 0,
    };

    return balance;
  }
};
