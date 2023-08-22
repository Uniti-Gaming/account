import { getBalance } from '@/core/services/userService';
import { checkVerification } from '@services/verificationService';

export const loader = async () => {
  try {
    const [verification, balance] = await Promise.all([checkVerification(), getBalance()]);

    return { verification, balance };
  } catch {
    const verification = {
      VerifyEmail: false,
      VerifyNumber: false,
      userDetails: false,
    };
    const balance = {
      main: 0,
      coins: 0,
      tickets: 0,
    };

    return { verification, balance };
  }
};
