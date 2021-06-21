// const { test, it, expect } = require("@jest/globals");
// const { describe } = require("yargs");

const sum = (a, b) => a + b;

// test('sums two values', () => {
//   expect(sum(2, 3)).toEqual(5);
// });

describe('testa função sum', () => {
  it ('testa se o retorno é uma soma', () => expect(5).toEqual(sum(2, 3)));
  it ('testa se o retorno não é uma adição', () => expect(4).not.toEqual(sum(8, 4)));
});