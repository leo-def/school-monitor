import { v4 as uuidV4 } from "uuid";
import { CalendarModalStateValue } from "../_context/calendarModalContext";
import { CalendarModalActionTypeEnum } from "../_enums/calendarModalActionType.enum";
import { CalendarModalAction } from "../_types/calendarModalAction";
import { CalendarModal } from "../_types/calendarModal";

export const calendarModalReducer = (
  state: CalendarModalStateValue,
  action: CalendarModalAction
): CalendarModalStateValue => {
  switch (action.type) {
    case CalendarModalActionTypeEnum.OPEN_MODAL:
      const modal = {
        id: uuidV4(),
        ...(action.payload as Omit<CalendarModal, "id">),
      };
      return {
        modals: [...state.modals, modal],
      } as CalendarModalStateValue;
    case CalendarModalActionTypeEnum.CLOSE_MODAL:
      return action.payload
        ? ({
            modals: state.modals.filter(
              (modal) => modal.id !== (action.payload as string)
            ),
          } as CalendarModalStateValue)
        : state;
      return state;
    case CalendarModalActionTypeEnum.RESET:
      return { modals: [] } as CalendarModalStateValue;
    default:
      return state;
  }
};
