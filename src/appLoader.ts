export const appLoader = async () => {
  const user = {
    name: 'Muhammetali',
    phone: '+993 (65) 81-25-14',
    id: 'UG-45-qwer',
    email: 'petrosov.her@yandex.ru',
    city: 'Ашхабад',
    lang: 'Русский',
    ref: 'XXXX-XXXX-XXXX',
    safety: {
      number: false,
      email: false,
      other: false,
    },
    balance: {
      un_coins: 140,
      up_coins: 200,
      tickets: 1,
    },
    difrent: {
      sex: 'Мужской',
      instagram: '@s_petrosov',
      tiktok: '@s_petrosov',
      favorite: 'Unite Gaming',
    },
  };

  return user;
};