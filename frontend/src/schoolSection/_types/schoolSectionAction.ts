import { AppAction } from "@/commons/_types/appAction";
import { SchoolSectionActionTypeEnum } from "../_enums/schoolSectionActionType.enum";
import { SchoolSectionPayload } from "./schoolSectionPayload";

export interface SchoolSectionAction
  extends AppAction<SchoolSectionActionTypeEnum, SchoolSectionPayload> {}
