import { IOption } from '@interfaces/optionInterface';

const currentYear = new Date().getFullYear();
const oldestYear = currentYear - 70;

export const optionsAge: IOption[] = generateOptions(currentYear, oldestYear);
export const optionsDay: IOption[] = generateOptions(31, 1).reverse();
export const optionsMonth: IOption[] = [
  { value: '1', label: 'Январь' },
  { value: '2', label: 'Февраль' },
  { value: '3', label: 'Март' },
  { value: '4', label: 'Апрель' },
  { value: '5', label: 'Май' },
  { value: '6', label: 'Июнь' },
  { value: '7', label: 'Июль' },
  { value: '8', label: 'Август' },
  { value: '9', label: 'Сентябрь' },
  { value: '10', label: 'Октябрь' },
  { value: '11', label: 'Ноябрь' },
  { value: '12', label: 'Декабрь' },
];
export const optionsLanguage: IOption[] = [
  { value: 'Русский', label: 'Русский' },
  { value: 'Türkmençe', label: 'Türkmençe' },
];
export const optionsSex: IOption[] = [
  { value: 'Мужской', label: 'Мужской' },
  { value: 'Женский', label: 'Женский' },
];
export const optionsvisitFrom: IOption[] = [
  { value: 'friends', label: 'Узнал от друзей' },
  { value: 'instagram', label: 'Инстаграм' },
  { value: 'tiktok', label: 'Тик-Ток' },
  { value: 'advertisement', label: 'Увидел рекламу' },
  { value: 'media', label: 'СМИ (новостные сайты, доски объявлений)' },
  { value: 'other', label: 'Другое' },
];
export const optionsCity: IOption[] = [
  { value: 'Ашхабад', label: 'Ашхабад' },
  { value: 'Туркменабад', label: 'Туркменабад' },
  { value: 'Туркменбаши', label: 'Туркменбаши' },
  { value: 'Дашогуз', label: 'Дашогуз' },
  { value: 'Мары', label: 'Мары' },
  { value: 'Другой', label: 'Другой' },
];
export const optionsFavorite: IOption[] = [
  { value: 'Launcher for PC', label: 'Launcher for PC' },
  { value: 'Launcher for Android', label: 'Launcher for Android' },
  { value: 'TeamSpeak', label: 'TeamSpeak' },
  { value: 'Mumble', label: 'Mumble' },
  { value: 'Ключ STEAM', label: 'Ключ STEAM' },
  { value: 'Серверные игры', label: 'Серверные игры' },
  { value: 'Сетевые игры', label: 'Сетевые игры' },
  { value: 'Одиночные игры', label: 'Одиночные игры' },
  { value: 'Покупка игр', label: 'Покупка игр' },
  { value: 'Сообщество', label: 'Сообщество' },
];

function generateOptions(max: number, min: number): IOption[] {
  const options: IOption[] = Array.from({ length: max - min + 1 }, (_, i) => {
    const value = String(max - i);
    return { value, label: value };
  });

  return options;
}
