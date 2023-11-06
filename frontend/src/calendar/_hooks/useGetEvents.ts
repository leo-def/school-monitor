import { addDays, setHours } from "date-fns";
import { CalendarEvent } from "@/calendar/_types/calendarEvent";

export function useGetEvents(
  referenceDate: Date,
  numberOfDays: number,
  numberOfHours: number,
  limit?: number
) {
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
    .map((_, index) =>
      getEvent(index, false, referenceDate, numberOfDays, numberOfHours, colors)
    );
  const weekEvents = Array(getRandomInt(1, limit ?? 10))
    .fill(0)
    .map((_, index) =>
      getEvent(index, true, referenceDate, numberOfDays, numberOfHours, colors)
    );
  return { dayEvents, weekEvents };
}

function getEvent(
  index: number,
  isWeekDay: boolean,
  referenceDate: Date,
  numberOfDays: number,
  numberOfHours: number,
  colors: Array<{ label: string; color: string }>
) {
  const color = colors[getRandomInt(0, colors.length - 1)];
  const startDay = isWeekDay
    ? getRandomInt(0, numberOfDays - 1)
    : getRandomInt(0, numberOfDays);
  const startHour = isWeekDay
    ? getRandomInt(0, numberOfHours)
    : getRandomInt(0, numberOfHours - 1);
  const startDate = addDays(referenceDate, startDay);
  const start = setHours(startDate, startHour);

  const endDay = isWeekDay
    ? startDay + getRandomInt(1, numberOfDays - startDay)
    : startDay;
  const endHour = isWeekDay
    ? getRandomInt(0, numberOfHours)
    : getRandomInt(startHour, numberOfHours - startHour);
  const endDate = addDays(referenceDate, endDay);
  const end = setHours(endDate, endHour);
  return {
    id: `${isWeekDay ? "Week" : "Day"} -events - ${index} -${getRandomInt(
      1,
      99999
    )} -${color.color} `,
    title: `${isWeekDay ? "Week" : "Day"} event ${index} ${color.label} `,
    fullDay: isWeekDay,
    start,
    end,
    color: color.color,
    backgroundColor: "black",
  } as CalendarEvent;
}

function getRandomInt(min: number, max: number) {
  max += 1;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
