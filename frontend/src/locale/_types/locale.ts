import { AppEntity } from "@/shared/_types/appEntity";
import { LocaleTypeEnum } from "../_enums/localeType.enum";

export interface Locale extends AppEntity {
  type: LocaleTypeEnum;
}
