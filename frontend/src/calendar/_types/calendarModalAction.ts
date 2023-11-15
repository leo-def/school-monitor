import { CalendarModalActionTypeEnum } from "../_enums/calendarModalActionType.enum";
import { CalendarModal } from "./calendarModal";

export interface CalendarModalAction {
  type: CalendarModalActionTypeEnum;
  payload: string | Omit<CalendarModal, "id"> | undefined;
}
