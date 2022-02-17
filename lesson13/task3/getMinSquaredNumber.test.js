import { minSquaredNumber } from "./getMinSquaredNumber.js";

it("should get min squared number", () => {
  const result = minSquaredNumber([3, 4, 2.5]);

  expect(result).toEqual(6.25);
});

it("should get null", () => {
  const result = minSquaredNumber([]);

  expect(result).toEqual(null);
});

it("should get null", () => {
  const result = minSquaredNumber("test");

  expect(result).toEqual(null);
});
