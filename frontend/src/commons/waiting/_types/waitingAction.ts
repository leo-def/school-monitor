import { AppAction } from "@/commons/_types/appAction";
import { WaitingActionTypeEnum } from "../_enums/waitingActionType.enum";
import { WaitingActionPayload } from "./waitingActionPayload";

export interface WaitingAction
  extends AppAction<WaitingActionTypeEnum, WaitingActionPayload> {}
