import { AppActionParam } from "@/shared/_types/appActionParam";
import { SidebarActionTypeEnum } from "../_enums/sidebarActionType.enum";
import { SidebarActionPayload } from "./sidebarActionPayload";

export interface SidebarAction
  extends AppActionParam<SidebarActionTypeEnum, SidebarActionPayload> {}
