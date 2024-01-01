import { AppAction } from "@/commons/_types/appAction";
import { SidebarActionTypeEnum } from "../_enums/sidebarActionType.enum";
import { SidebarActionPayload } from "./sidebarActionPayload";

export interface SidebarAction
  extends AppAction<SidebarActionTypeEnum, SidebarActionPayload> {}
