import { formatMoney, truncate } from '../../helpers/strings';

describe('Strings helper', () => {
  it('truncate() Should truncate strings bigger than 5 characters', () => {
    return expect(
      truncate('Lorem ipsum ipsum lorem ipsum lorem ipsum', 5)
    ).toBe('Lorem...');
  });

  it('truncate() Should truncate strings lesser with default max characters', () => {
    return expect(truncate('Lorem')).toBe('Lorem');
  });

  it('formatMoney() Should format numbers with decimal points', () => {
    return expect(formatMoney('1.4532')).toBe('$ 1.45');
  });
});
