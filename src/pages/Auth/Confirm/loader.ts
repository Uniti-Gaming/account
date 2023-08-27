import { sendEmailVerification, sendNumberVerification } from '@services/verificationService';

export const emailLoader = async () => {
  try {
    return await sendEmailVerification();
  } catch {
    return null;
  }
};

export const phoneLoader = async () => {
  try {
    return await sendNumberVerification();
  } catch {
    return null;
  }
};