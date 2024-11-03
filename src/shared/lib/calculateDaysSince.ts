export function calculateDaysSince(taskDateStr: string): number {
  const taskDateParts = taskDateStr.split('.').map(Number);

  const taskDate = new Date(taskDateParts[2], taskDateParts[1] - 1, taskDateParts[0]);
  
  const currentDate = new Date();

  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const differenceInMilliseconds = currentDate.getTime() - taskDate.getTime();
  const differenceInDays = differenceInMilliseconds / millisecondsPerDay;

  return Math.floor(differenceInDays);
}