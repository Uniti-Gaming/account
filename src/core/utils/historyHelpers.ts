const getCurrency = (type: 'main' | 'coins' | 'tickets') => {
  switch (type) {
  case 'main':
    return 'TMT';
  case 'coins':
    return 'баллов(UG)';
  case 'tickets':
    return 'Билетов';
  default:
    return '';
  }
};

const getStatus = (status: 'success' | 'error' | 'pending') => {
  switch (status) {
  case 'success':
    return 'Выполнено';
  case 'error':
    return 'Неудачно';
  case 'pending':
    return 'В обработке';
  default:
    return '';
  }
};

export { getCurrency, getStatus };