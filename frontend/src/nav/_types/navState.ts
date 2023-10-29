import { NavItem } from "./navItem";

export interface NavState {
  items: { [index: number]: NavItem };
}
