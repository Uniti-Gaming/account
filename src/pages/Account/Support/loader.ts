import { getFaq } from '@/core/services/faqServices';

export const loader = async () => {
  const data = await getFaq();
  return data.reverse();
};
