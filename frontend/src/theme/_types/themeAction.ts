import { AppActionParam } from "@/shared/_types/appActionParam";
import { ThemeActionTypeEnum } from "../_enums/themeActionType.enum";
import { ThemeActionPayload } from "./themeActionPayload";

export interface ThemeAction
  extends AppActionParam<ThemeActionTypeEnum, ThemeActionPayload> {}
