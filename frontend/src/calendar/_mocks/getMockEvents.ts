import {
  format,
  startOfDay,
  endOfDay,
  subDays,
  subHours,
  isSameDay,
} from "date-fns";
import { CalendarEvent } from "@/calendar/_types/calendarEvent";

export function getMockEvents(
  initDate: Date,
  endDate: Date,
  limit?: number
): Array<CalendarEvent> {
  const colors = [
    {
      label: "Tomate",
      color: "#d50000",
    },
    {
      label: "Flamingo",
      color: "#e67c73",
    },
    {
      label: "Tangerina",
      color: "#f4511e",
    },
    {
      label: "Banana",
      color: "#f6bf26",
    },
    {
      label: "Salvia",
      color: "#33b679",
    },
    {
      label: "Manjericão",
      color: "#0b8043",
    },
    {
      label: "Pavão",
      color: "#039be5",
    },
    {
      label: "Mirtilo",
      color: "#3f51b5",
    },
    {
      label: "Lavanda",
      color: "#7986cb",
    },
    {
      label: "Uva",
      color: "#8e24aa",
    },
  ] as Array<{ label: string; color: string }>;
  const dayEvents = Array(getRandomInt(1, limit ?? 10))
    .fill(0)
    .map((_, index) => getEvent(index, false, initDate, endDate, colors));

  const fullDayEvents = isSameDay(endDate, initDate)
    ? []
    : Array(getRandomInt(1, limit ?? 10))
        .fill(0)
        .map((_, index) => getEvent(index, true, initDate, endDate, colors));
  return [...dayEvents, ...fullDayEvents];
}

function getEvent(
  index: number,
  isFullDayEvent: boolean,
  initDate: Date,
  endDate: Date,
  colors: Array<{ label: string; color: string }>
) {
  const color = colors[getRandomInt(0, colors.length - 1)];
  let start = null;
  let end = null;
  if (isFullDayEvent) {
    start = getRandomDate(initDate, subDays(endDate, 1));
    end = getRandomDate(start, endDate);
  } else {
    const endDay = endOfDay(getRandomDate(initDate, endDate));
    start = getRandomDate(startOfDay(endDay), subHours(endDay, 1));
    end = getRandomDate(start, endDay);
  }
  return {
    id: `${isFullDayEvent ? "Week" : "Day"} -events - ${index} -${getRandomInt(
      1,
      99999
    )} -${color.color} `,
    title: ` #${index} - ${isFullDayEvent ? "Week" : "Day"} event (${format(
      start,
      "dd/MM/yyy hh:mm"
    )} - ${format(end, "dd/MM/yyy hh:mm")}) `,
    fullDay: isFullDayEvent,
    start,
    end,
    color: color.color,
    backgroundColor: "black",
  } as CalendarEvent;
}

function getRandomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

function getRandomInt(min: number, max: number) {
  max += 1;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
