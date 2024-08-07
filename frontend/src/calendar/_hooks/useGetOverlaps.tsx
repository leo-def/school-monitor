import { CalendarEvent } from "../_types/calendarEvent";
import { Overlaps } from "../_types/overlaps";
import { Interval } from "../_types/interval";
import { CalendarDateUtilsContextValue } from "../_context/calendarDateUtilsContext";

export function useGetOverlaps(
  events: Array<CalendarEvent>,
  dateUtils: CalendarDateUtilsContextValue,
  compareTime = true,
) {
  const overlaps: Overlaps = {};
  for (const eventA of events) {
    overlaps[eventA.id] = [];
    for (const eventB of events) {
      if (
        eventA.id !== eventB.id &&
        isOverlapInterval(eventA as Interval, eventB as Interval, dateUtils, compareTime)
      ) {
        overlaps[eventA.id].push(eventB.id);
      }
    }
  }
  return overlaps;
}

export function isOverlapInterval(
  intervalA: Interval,
  intervalB: Interval,
  dateUtils: CalendarDateUtilsContextValue,
  compareTime = true
) {
  const { endOfDay, isAfter } = dateUtils;
  const intervalBStart = compareTime
    ? intervalB.start
    : endOfDay(intervalB.start);
  const intervalBEnd = compareTime ? intervalB.end : endOfDay(intervalB.end);
  const intervalAStart = compareTime
    ? intervalA.start
    : endOfDay(intervalA.start);
  const intervalAEnd = compareTime ? intervalA.end : endOfDay(intervalA.end);
  const isBeforeOrEquals = (dateA: Date, dateB: Date) => !isAfter(dateA, dateB);
  // intervalB.start <= intervalA.start <= intervalB.end
  if (
    isBeforeOrEquals(intervalBStart, intervalAStart) &&
    isBeforeOrEquals(intervalAStart, intervalBEnd)
  ) {
    return true;
  }
  // intervalBStart <= intervalAEnd <= intervalBEnd
  if (
    isBeforeOrEquals(intervalBStart, intervalAEnd) &&
    isBeforeOrEquals(intervalAEnd, intervalBEnd)
  ) {
    return true;
  }

  // intervalAStart <= intervalBStart &&    intervalAEnd >= intervalBEnd
  if (
    isBeforeOrEquals(intervalAStart, intervalBStart) &&
    isBeforeOrEquals(intervalBEnd, intervalAEnd)
  ) {
    return true;
  }

  // intervalBStart <= intervalAStart &&    intervalBEnd >= intervalAEnd
  if (
    isBeforeOrEquals(intervalBStart, intervalAStart) &&
    isBeforeOrEquals(intervalAEnd, intervalBEnd)
  ) {
    return true;
  }
  return false;
}
