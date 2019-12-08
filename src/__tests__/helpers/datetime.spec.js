import { toUnixEpoch, formatDate } from '../../helpers/datetime';

describe('Datetime helper', () => {
  it('toUnixEpoch() Should return a timestamp for a given string date', () => {
    return expect(toUnixEpoch('2019-12-01')).toBe(1575165600000);
  });

  it('formatDate() Should format a string date with default format appearence', () => {
    return expect(formatDate('2019-12-01')).toBe('01/12/2019');
  });

  it('formatDate() Should format a string date with custom format appearence', () => {
    return expect(formatDate('2019-12-01', 'dd-MM-yyyy')).toBe('01-12-2019');
  });
});
