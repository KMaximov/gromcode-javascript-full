// 3. каррирование 

// const sum = (a, b) => a + b

const sum = a => b => a + b; //практично якщо ми не можемо отримати аргументи відразу(отримуємо один аргумент в одній частині, другий в іншій)

const add3 = sum(3);

const result = add3(5);

console.log(result);

const mult = a => b => a * b;

const twice = mult(2);
const triple = mult(3);

console.log(twice(5))