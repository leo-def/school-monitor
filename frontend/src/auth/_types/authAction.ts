import { AppAction } from "@/shared/_types/appAction";
import { AuthActionTypeEnum } from "../_enums/authActionType.enum";
import { UserInfo } from "./userInfo";

export interface AuthAction
  extends AppAction<AuthActionTypeEnum, { user?: UserInfo }> {}
