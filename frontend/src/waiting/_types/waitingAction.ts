import { AppActionParam } from "@/shared/_types/appActionParam";
import { WaitingActionTypeEnum } from "../_enums/waitingActionType.enum";
import { WaitingActionPayload } from "./waitingActionPayload";

export interface WaitingAction
  extends AppActionParam<WaitingActionTypeEnum, WaitingActionPayload> {}
