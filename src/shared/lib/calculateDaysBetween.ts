export type TDay = 'Пн' | 'Вт' | 'Ср' | 'Чт' | 'Пт' | 'Сб' | 'Вс'

export function calculateDaysBetween(startDateStr: string, endDateStr: string): number {
  const startDateParts = startDateStr.split('.').map(Number);
  const endDateParts = endDateStr.split('.').map(Number);

  const startDate = new Date(startDateParts[2], startDateParts[1] - 1, startDateParts[0]);
  const endDate = new Date(endDateParts[2], endDateParts[1] - 1, endDateParts[0]);

  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const differenceInMilliseconds = endDate.getTime() - startDate.getTime();
  const differenceInDays = differenceInMilliseconds / millisecondsPerDay;

  return Math.round(differenceInDays);
}