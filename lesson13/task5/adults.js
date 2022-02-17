// 1.створити новий об"єкт куди будемо класти свойства які підходять
// 2. проходимо по свойствам в обєкті
// 3. якщо свойство підходить під умову то зкопіювати його в новий об"єкт
// 4. вернути новий об"єкт

// input: obj;
// output: obj;

export const getAdults = (obj) => {
  const copy = {};
  for (let key in obj) {
    if (obj[key] > 17) {
      copy[key] = obj[key];
    }
  }
  return copy;
};
