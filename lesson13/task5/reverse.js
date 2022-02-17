// 1. перевірити вхідні данні
// 2. вернути новий перевернутий масив

// input = arr
// output = newArr

export const reverseArray = (num) => {
  if (!Array.isArray(num)) {
    return null;
  }
  return num.slice().reverse();
};
