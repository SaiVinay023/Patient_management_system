// utils/dateUtils.ts or a similar utils file

export function calculateRemainingDays(startDate: string, numberOfDays: number): number {
  const start = new Date(startDate);
  const end = new Date(start);
  end.setDate(start.getDate() + numberOfDays);

  const now = new Date();

  if (now >= end) return 0;

  // Calculate remaining days (rounded up)
  const diffTime = end.getTime() - now.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
