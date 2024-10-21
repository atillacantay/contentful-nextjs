export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);

  return `${year}-${month}-${day}`;
};

export const getAllDaysInMonth = (dateStr: string): string[] => {
  const inputDate = new Date(dateStr);
  const year = inputDate.getFullYear();
  const month = inputDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const daysArray = Array.from({ length: daysInMonth }, (_, dayIndex) => {
    const dayDate = new Date(year, month, dayIndex + 1);
    const formattedDate = [
      dayDate.getFullYear(),
      ("0" + (dayDate.getMonth() + 1)).slice(-2),
      ("0" + dayDate.getDate()).slice(-2),
    ].join("-");
    return formattedDate;
  });

  return daysArray;
};

/**
 * Checks if a given date is before today's date.
 * @param {string} dateString - The date string to compare with today's date.
 * @returns {boolean} - True if the given date is before today, otherwise false.
 */
export const isDateBeforeToday = (dateString: string): boolean => {
  const inputDate = new Date(dateString);
  inputDate.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return inputDate < today;
};

/**
 * Returns a date string representing the current date offset by a specific number of days.
 * @param {number} offsetDays The number of days to offset from today (can be negative).
 * @return {string} The offset date in YYYY-MM-DD format.
 */
export const getOffsetDate = (offsetDays: number): string => {
  const date = new Date();
  date.setDate(date.getDate() + offsetDays);
  return date.toISOString().split("T")[0];
};

/**
 * Returns the minimum permissible date for the DatePicker.
 * @return {string} The min date in YYYY-MM-DD format, 30 days before today.
 */
export const getMinDate = (): string => getOffsetDate(-30);

/**
 * Returns the maximum permissible date for the DatePicker.
 * @return {string} The max date in YYYY-MM-DD format, 365 days after today.
 */
export const getMaxDate = (): string => getOffsetDate(365);
