import {formatTransactionDate} from '../src/utils/formatTransactionDate';

describe('formatTransactionDate', () => {
  it('should format a timestamp into a date string', () => {
    const timestamp = new Date('2023-01-01T14:30:00').getTime() / 1000;
    const expected = '01/01/2023 - 14:30';
    const result = formatTransactionDate(timestamp);

    expect(result).toBe(expected);
  });

  it('should pad single-digit day, month, hour, and minute with leading zeros', () => {
    const timestamp = new Date('2023-01-03T04:05:00').getTime() / 1000;
    const expected = '03/01/2023 - 04:05';
    const result = formatTransactionDate(timestamp);

    expect(result).toBe(expected);
  });
});
