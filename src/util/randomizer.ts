export const shuffle = (array: any[]) => {
  if (array.length === 0) return [];
  return array.sort(() => Math.random() - 0.5);
};
