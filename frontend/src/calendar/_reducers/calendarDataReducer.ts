import {
  CalendarDataState,
  CalendarDataDispatchParam,
  CalendarDataActionTypeEnum,
  CalendarDataPayladInit,
} from "../_types/caledarDataContext";

export const calendarDataReducer = (
  state: CalendarDataState,
  action: CalendarDataDispatchParam
): CalendarDataState => {
  switch (action.type) {
    case CalendarDataActionTypeEnum.INIT:
      const payload = action.payload as CalendarDataPayladInit;
      return {
        ...state,
        viewType: payload.viewType,
        referenceDate: payload.referenceDate,
      } as CalendarDataState;
    case CalendarDataActionTypeEnum.SET_INIT_DATE:
      return {
        ...state,
      } as CalendarDataState;
    default:
      return state;
  }
};
