const start = 10;
const end = 20;
let result = 0;
for (let i = start; i <= 20; i += 1) {
  if (i % 5 === 0) {
    console.log(i);
    continue;
  } else if (i % 2 === 0 && i % 4 !== 0) {
    result += i;
    continue;
  } else if (i % 3 === 0) {
    result -= i;
    continue;
  } else if (i % 4 === 0) {
    result *= i;
    continue;
  }
}