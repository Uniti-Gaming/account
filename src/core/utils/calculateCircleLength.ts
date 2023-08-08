export const calculateCircleLength = (n: number) => {
  const c = Math.PI * (106 * 2);
  return ((100 - n) / 100) * c;
};