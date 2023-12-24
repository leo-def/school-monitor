import { AppAction } from "@/commons/_types/appAction";
import { SessionActionTypeEnum } from "../_enums/sessionActionType.enum";
import { SessionActionPayload } from "./sessionActionPayload";

export interface SessionAction
  extends AppAction<SessionActionTypeEnum, SessionActionPayload> {}
