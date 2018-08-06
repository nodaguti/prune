const DAY = 24 * 60 * 60 * 1000;

export function daysFromToday(date: Date): number {
  const today = Date.now();
  const targetTime = date.getTime();

  return Math.floor((today - targetTime) / DAY);
}
