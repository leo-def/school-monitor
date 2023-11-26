import { ReactNode } from "react";

export interface Renders {
  [key: string]: ReactNode | undefined;
  protected?: ReactNode;
  public?: ReactNode;
}
