import { sum, sub, mul, div } from './src/calculator/main.js';
import { expect, test, describe } from 'vitest'

/**
 * Parametrized test * nested groups
 * Instead of writing multiple test cases, we can use
 * test.each to write a single test case that runs
 * multiple times with different parameters.
 */
describe.each([
  { a: 0.1, b: 0.2, method: sum, expected: 0.3 },
  { a: 3, b: 2, method: sub, expected: 1 },
  { a: 2, b: 3, method: mul, expected: 6 },
  { a: 6, b: 3, method: div, expected: 2 },
])('describe operation $method($a, $b)', ({ a, b, method, expected }) => {
  test(`${method.name}(${a}, ${b}) should return ${expected}`, () => {
    expect(method(a, b)).toBeCloseTo(expected);
  });

  test(`${method.name}(${a}, ${b}) should return a number`, () => {
    expect(typeof method(a, b)).toBe('number');
  });
});
