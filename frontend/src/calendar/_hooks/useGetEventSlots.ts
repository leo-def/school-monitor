import { CalendarEventSlot } from "@/calendar/_types/calendarEventSlot";
import { Overlaps } from "@/calendar/_types/overlaps";
import { CalendarEvent } from "@/calendar/_types/calendarEvent";
import { useGetOverlaps } from "./useGetOverlaps";
import { useGetCalendarDateUtils } from "./useGetCalendarDateUtils";

export function useGetEventSlots(
  events: Array<CalendarEvent>,
  compareTime = true
) {
  const dateUtils = useGetCalendarDateUtils();
  const overlaps: Overlaps = useGetOverlaps(events, dateUtils, compareTime);
  const eventSlots: CalendarEventSlot = {};
  let hasConflict = false;
  do {
    hasConflict = false;
    Object.keys(overlaps).forEach((eventAId) => {
      eventSlots[eventAId] = eventSlots[eventAId] ?? 1;
      overlaps[eventAId].forEach((eventBId) => {
        eventSlots[eventBId] = eventSlots[eventBId] ?? 1;
        if (eventSlots[eventAId] === eventSlots[eventBId]) {
          eventSlots[eventBId] = eventSlots[eventBId] + 1;
          hasConflict = true;
        }
      });
    });
  } while (hasConflict);
  return eventSlots;
}
