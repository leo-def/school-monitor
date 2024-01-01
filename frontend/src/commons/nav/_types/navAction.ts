import { AppAction } from "@/commons/_types/appAction";
import { NavItem } from "./navItem";
import { NavActionTypeEnum } from "../_enums/navActionType.enum";

export interface NavAction
  extends AppAction<NavActionTypeEnum, { item?: NavItem; pathName?: string }> {}
