import isEmail from 'validator/es/lib/isEmail';
export const checkValidity = (name: string, value: string): string => {
  if (name === 'friendRef') return '';
  if (value.length === 0) return 'Обязательное поле';
  if (name === 'name') {
    const pattern = /^[a-zA-Z]+$/;
    if (!pattern.test(value)) {
      return 'Содержит недопустимые символы (только латинские символы)';
    } else if (value.length < 2) {
      return 'Слишком короткое имя';
    }
  }
  if (name === 'password' && value.length < 6) {
    return 'Слишком короткий пароль';
  }
  if (name === 'number' && value.length < 16) {
    return 'Слишком короткий номер телефона';
  }
  if (name === 'email' && !isEmail(value)) {
    return 'Неправильный формат электронной почты';
  }

  return '';
};