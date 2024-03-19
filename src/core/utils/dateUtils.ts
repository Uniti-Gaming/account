export function addMonthsToDate(months: 1 | 3 | 6) {
  const currentDate = new Date();
  const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + months, currentDate.getDate());
  const formattedDate = newDate.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  }).replace(/\./g, '.');
  return formattedDate;
}