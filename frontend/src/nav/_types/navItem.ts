import { ReactNode } from "react";
import { NavItemTypeEnum } from "../_enums/navItemType.enum";

export interface NavItem {
  type: NavItemTypeEnum;
  index: number;
  label?: string | ReactNode | React.JSX.Element;
  path?: string;
  object?: any;
}
