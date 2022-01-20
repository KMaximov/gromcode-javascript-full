let sum = 0;
let div = 0;
let mods = 0;
for (let i = 0; i <= 1000; i += 1) {
  sum += i;
  div = Math.floor(sum / 1234);
  mods = sum % 1234;
}
console.log(div > mods);
