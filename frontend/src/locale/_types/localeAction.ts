import { AppActionParam } from "@/shared/_types/appActionParam";
import { LocaleActionTypeEnum } from "../_enums/localeActionType.enum";
import { LocaleActionPayload } from "./localeActionPayload";

export interface LocaleAction
  extends AppActionParam<LocaleActionTypeEnum, LocaleActionPayload> {}
