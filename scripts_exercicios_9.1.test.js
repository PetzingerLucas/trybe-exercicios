const {
  describe, expect, test,
} = require('@jest/globals');

describe('5 - teste', () => {
  test('retorna a soma', () => {
    const sum = (a, b) => a + b;
    expect(sum(2, 3)).toEqual(5);
  });
});
