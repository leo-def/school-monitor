import { NavItem } from "./navItem";

export interface NavState {
  items: { [index: number]: NavItem };
  href: string;
  index: number | null;
}
