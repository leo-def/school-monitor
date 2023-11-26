import { AppActionParam } from "@/shared/_types/appActionParam";
import { AuthActionTypeEnum } from "../_enums/authActionType.enum";
import { AuthActionPayload } from "./AuthActionPayload";

export interface AuthAction
  extends AppActionParam<AuthActionTypeEnum, AuthActionPayload> {}
