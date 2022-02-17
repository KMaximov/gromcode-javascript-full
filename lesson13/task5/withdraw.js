// 1. знайти індекс під яким знаходиться клієнт з яким будемо працювати
// 2. якщо баланс цього клієнта (знаходимо по індексу) менший за вказану сумму то вертаємо -1
// 3. в іншому випадку з балансу віднімаємо сумму

// input: arrNum, arrStr, str, num
// output: num, кінцевий массив повинен змінюватись якщо баланс >

export const withdraw = (clients, balances, client, amount) => {
  const indexOfClient = clients.indexOf(client);
  if (balances[indexOfClient] < amount) {
    return -1;
  }
  return (balances[indexOfClient] -= amount);
};
