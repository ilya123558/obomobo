export function getWeekArray(daysOffset = 0) {
  const weekDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const result = [];

  const referenceDate = new Date();
  referenceDate.setDate(referenceDate.getDate() + daysOffset);

  const currentDayIndex = referenceDate.getDay();
  const currentDayOfMonth = referenceDate.getDate();
  const month = referenceDate.getMonth();
  const year = referenceDate.getFullYear();
  
  const offset = 2;

  for (let i = -offset; i < 7 - offset; i++) {
      const dayDate = new Date(year, month, currentDayOfMonth + i);
      
      const dayOfWeek = weekDays[dayDate.getDay()];
      const dayOfMonth = dayDate.getDate();

      result.push({ title: dayOfWeek, day: dayOfMonth });
  }

  return result;
}