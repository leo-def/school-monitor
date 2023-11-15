import { CalendarModalStateValue } from "@/calendar/_context/calendarModalContext";
import { CalendarModalActionTypeEnum } from "@/calendar/_enums/calendarModalActionType.enum";
import { useGetCalendarModal } from "@/calendar/_hooks/useGetCalendarModal";
import { CalendarModal } from "@/calendar/_types/calendarModal";
import { CalendarModalAction } from "@/calendar/_types/calendarModalAction";
import React, { Dispatch, useCallback } from "react";

export interface CalendarModalContainerProps {
}
export function CalendarModalContainer() {
    const modalValue = useGetCalendarModal()
    if (!modalValue) {
        return undefined;
    }

    return (<CalendarModalContainerContent {...modalValue} />)
}
export interface CalendarModalContainerContentProps {
    state: CalendarModalStateValue;
    dispatch: Dispatch<CalendarModalAction>;
}

export function CalendarModalContainerContent({ state: { modals }, dispatch }: CalendarModalContainerContentProps) {
    return (<div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: 'flex'
    }}>
        {modals.map((modal: CalendarModal) => <CalendarModalItem key={modal.id} modal={modal} dispatch={dispatch} />)}
    </div >)
}
export interface CalendarModalItemProps {
    modal: CalendarModal;
    dispatch: Dispatch<CalendarModalAction>;
}

export function CalendarModalItem({ modal, dispatch }: CalendarModalItemProps) {
    const handleClose = useCallback(() => dispatch({
        type: CalendarModalActionTypeEnum.CLOSE_MODAL,
        payload: modal.id
    }), [dispatch, modal.id])
    return (<div key={modal.id} style={{
        top: `${modal.top}px`,
        left: `${modal.left}px`,
        position: 'absolute',
        backgroundColor: 'gray',
        zIndex: 9999,
    }}>
        <button onClick={handleClose}>X</button>
        <ul>
            {modal.events.map((event) => (<li key={event.id}>{event.title}</li>))}
        </ul>
    </div>)
}