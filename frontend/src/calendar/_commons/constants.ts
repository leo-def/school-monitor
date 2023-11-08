export const NUMBER_OF_DAYS_HOURS = 24;
export const DAY_HOURS = Array(NUMBER_OF_DAYS_HOURS)
  .fill(0)
  .map((_, index) => index);
export const NUMBER_OF_WEEK_DAYS = 7;

export const NUMBER_OF_MONTH_CALENDAR_ROWS = 5;
export const NUMBER_OF_MOTH_CALENDAR_DAYS =
  NUMBER_OF_WEEK_DAYS * NUMBER_OF_MONTH_CALENDAR_ROWS;
