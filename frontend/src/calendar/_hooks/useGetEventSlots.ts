import { isAfter } from "date-fns";
import { CalendarEventSlot } from "@/calendar/_types/calendarEventSlot";
import { Interval } from "@/calendar/_types/interval";
import { Overlaps } from "@/calendar/_types/overlaps";
import { CalendarEvent } from "@/calendar/_types/calendarEvent";
import { getOverlaps } from "../_services/overlap.service";

export function useGetEventSlots(
  events: Array<CalendarEvent>,
  compareTime = true
) {
  const overlaps: Overlaps = getOverlaps(events, compareTime);
  const eventSlots: CalendarEventSlot = {};
  let hasConflict = false;
  do {
    hasConflict = false;
    Object.keys(overlaps).forEach((eventAId) => {
      overlaps[eventAId].forEach((eventBId) => {
        if ((eventSlots[eventAId] ?? 0) === (eventSlots[eventBId] ?? 0)) {
          eventSlots[eventBId] = (eventSlots[eventBId] ?? 0) + 1;
          hasConflict = true;
        }
      });
    });
  } while (hasConflict);
  return eventSlots;
}
