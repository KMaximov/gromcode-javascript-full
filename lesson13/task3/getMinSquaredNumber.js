// algo:
// 1. зробити перевірку вхідних данних
// 2. піднести всі числа в массиві до квадрату
// 3. вернути найменше значення в массиві
// 4. зробити перевірку ф-ції

// input: array;
// output: number;

export const minSquaredNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const squaredNumbers = arr.map((num) => num ** 2);
  return Math.min(...squaredNumbers);
};
