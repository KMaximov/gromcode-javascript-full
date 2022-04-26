const calc = initValue => {
    let result = initValue;
// 1. чейнинг - суть в тому що завжди вертаємо this (об"єкт вертає ссилку на сам об"єкт)
const calculator = {
    add(value) {
        result += value;
        // return this;
        return calculator;
    },
    mult(value) {
        result *= value;
        return calculator;
    },
    subtract(value) {
        result -= value;
        return this;
    },
    div(value) {
        result /= value;
        return this;
    },
    result() {
        return result;
    }
};

    return calculator;
}

const result = calc(3).add(2).mult(4).div(10).subtract(5).result();

console.log(result);