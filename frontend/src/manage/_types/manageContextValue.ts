import { AppReducerContext } from "@/commons/_types/appReducerContext";
import { ManageConfig } from "./config/manageConfig";
import { ManageStatusState } from "./status/manageStatusState";
import { ManageStatusAction } from "./manageStatusAction";

export interface ManageContextValue<T>
  extends AppReducerContext<ManageStatusState<T>, ManageStatusAction<T>> {
  config: ManageConfig<T>;
}
