export function calculateRemainingDays(
  startDate: string | Date,
  numberOfDays: number,
  currentDate: string | Date = new Date()
): number {
  const start = new Date(startDate);
  const current = new Date(currentDate);
  // Calculate the end date by adding numberOfDays to startDate
  const endDate = new Date(start);
  endDate.setDate(start.getDate() + numberOfDays);

  // Calculate remaining time in milliseconds
  const diffTime = endDate.getTime() - current.getTime();

  // Convert milliseconds to full days, minimum 0
  return diffTime > 0 ? Math.ceil(diffTime / (1000 * 60 * 60 * 24)) : 0;
}
