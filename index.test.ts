import { sum } from './index';

describe('sum()', () => {
  describe('given 2 and 3', () => {
    it('should return 5', () => {
      expect(sum(2, 3)).toStrictEqual(5);
    });
  });
});
