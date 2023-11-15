import { useContext } from "react";
import { CalendarModalContext } from "../_context/calendarModalContext";
import { CalendarModalActionTypeEnum } from "../_enums/calendarModalActionType.enum";
import { CalendarModal } from "../_types/calendarModal";

export function useOpenCalendarModal(): ((modal: Omit<CalendarModal, 'id'>) => void) | undefined {
    const contextValue = useContext(CalendarModalContext);
    const dispatch = contextValue?.dispatch

    return (dispatch ?
        (modal: Omit<CalendarModal, 'id'>) => dispatch({
            type: CalendarModalActionTypeEnum.OPEN_MODAL,
            payload: modal
        }) : undefined)
}