export const appLoader = async () => {
  const user = {
    name: 'Muhammetali',
    number: '+993 (65) 81-25-14',
    id: 'UG-45-qwer',
    email: 'petrosov.her@yandex.ru',
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
  };

  return user;
};