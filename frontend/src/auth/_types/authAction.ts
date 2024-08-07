import { AppAction } from "@/commons/_types/appAction";
import { AuthActionTypeEnum } from "../_enums/authActionType.enum";
import { AuthActionPayload } from "./payloads/authActionPayload";

export interface AuthAction
  extends AppAction<AuthActionTypeEnum, AuthActionPayload> {}
