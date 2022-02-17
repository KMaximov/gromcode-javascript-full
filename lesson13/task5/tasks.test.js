import { reverseArray } from "./reverse";
import { withdraw } from "./withdraw";
import { getAdults } from "./adults";
// test for reverse

it("should get reverse array num", () => {
  const result = reverseArray([1, 5, 10]);

  expect(result).toEqual([10, 5, 1]);
});

it("should get reverse array string", () => {
  const result = reverseArray(["1", "5", "10"]);

  expect(result).toEqual(["10", "5", "1"]);
});

it("should get null", () => {
  const result = reverseArray(2);

  expect(result).toEqual(null);
});

// test for withdraw

it("should get user balance", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10);

  expect(result).toEqual(-1);
});

it("should get John balance", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);

  expect(result).toEqual(37);
});

it("should get Ann balance", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "Ann", 500);

  expect(result).toEqual(900);
});

//test for adults

it("should get adults > 17", () => {
  const result = getAdults({ "John Doe": 19, Tom: 17, Bob: 18 });

  expect(result).toEqual({ "John Doe": 19, Bob: 18 });
});

it("should get adults > 17", () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });

  expect(result).toEqual({ Ann: 56 });
});

it("should get adults > 17", () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });

  expect(result).toEqual({ Ann: 56 });
});

it("should get adults > 17", () => {
  const result = getAdults({ Andrey: 7 });

  expect(result).toEqual({});
});
