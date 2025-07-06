import { calculateRemainingDays } from '../dateUtils';

describe('calculateRemainingDays', () => {
  test('returns correct remaining days when end date is in the future', () => {
    const startDate = '2025-07-01';
    const numberOfDays = 10;
    const currentDate = '2025-07-05'; // 4 days after start
    const result = calculateRemainingDays(startDate, numberOfDays, currentDate);
    expect(result).toBe(6); // 10 - 4 days = 6 days remaining
  });

  test('returns 0 when treatment ended', () => {
    const startDate = '2025-06-01';
    const numberOfDays = 10;
    const currentDate = '2025-06-15'; // past end date
    const result = calculateRemainingDays(startDate, numberOfDays, currentDate);
    expect(result).toBe(0);
  });

  test('returns numberOfDays if currentDate equals startDate', () => {
    const startDate = '2025-07-01';
    const numberOfDays = 10;
    const currentDate = '2025-07-01';
    const result = calculateRemainingDays(startDate, numberOfDays, currentDate);
    expect(result).toBe(10);
  });

  test('handles Date objects', () => {
    const startDate = new Date('2025-07-01');
    const numberOfDays = 5;
    const currentDate = new Date('2025-07-03');
    const result = calculateRemainingDays(startDate, numberOfDays, currentDate);
    expect(result).toBe(3);
  });
});
