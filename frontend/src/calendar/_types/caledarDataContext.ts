import { Dispatch } from "react";
import { CalendarViewTypeEnum } from "../_enums/calendarViewType.enum";
import { LabelsFormat, defaultLabelsFormat } from "./labelsFormat";
import { CalendarCallbacks } from "./calendarCallbacks";
import { CalendarEvent } from "./calendarEvent";

export interface CalendarDataState {
  viewType: CalendarViewTypeEnum;
  referenceDate: Date;
  initDate: Date;
  labelsFormat: LabelsFormat;
  currDate: Date;
  events: Array<CalendarEvent>;
  callbacks?: CalendarCallbacks;
  cols?: number;
  rows?: number;
  numberOfDays?: number;
}

export const initialCalendarDataState = {
  viewType: CalendarViewTypeEnum.HOUR_DAY,
  referenceDate: new Date(),
  initDate: new Date(),
  currDate: new Date(),
  labelsFormat: defaultLabelsFormat,
  events: [],
} as CalendarDataState;

export enum CalendarDataActionTypeEnum {
  INIT = "INIT",
  UPDATE = "UPDATE",
  SET_INIT_DATE = "SET_INIT_DATE",
}

export interface CalendarDataPayladInit {
  viewType: CalendarViewTypeEnum;
  referenceDate?: Date;
}

export interface CalendarDataPayladSetInitDate {
  initDate: Date;
}

export type CalendarDataDispatchParamPayload =
  | CalendarDataPayladInit
  | CalendarDataPayladSetInitDate;

export interface CalendarDataDispatchParam {
  type: CalendarDataActionTypeEnum;
  payload: CalendarDataDispatchParamPayload;
}
export interface CalendarDataContextValue {
  state: CalendarDataState;
  dispatch?: Dispatch<CalendarDataDispatchParam>;
}
