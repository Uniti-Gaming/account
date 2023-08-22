import { sendEmailVerification } from '@services/verificationService';

export const emailLoader = async () => {
  try {
    return await sendEmailVerification();
  } catch {
    return null;
  }
};