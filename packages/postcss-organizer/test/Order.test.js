'use strict';

const Order = require('../src/Order');

const decl = prop => ({ type: 'decl', prop });
const generate = (number, iterator) => Array.from(Array(number), (_, p) => iterator(p));

describe('Order', () => {
  describe('computeWeight', () => {
    it('one vs many', () => {
      const sortOrder = [
        generate(8, p => `a${p}`),
        generate(1, p => `b${p}`),
      ];

      const order = new Order(sortOrder);
      const aa = decl('a7');
      const bb = decl('b0');

      expect(order.isSimilarGroup(bb, aa)).toBe(false);
    });

    it('many vs many', () => {
      const sortOrder = Array.from('abcdef').map(a => generate(20, p => `${a}${p}`));

      const order = new Order(sortOrder);
      const aa = decl('b18');
      const bb = decl('c0');

      expect(order.isSimilarGroup(bb, aa)).toBe(false);
    });
  });
});
