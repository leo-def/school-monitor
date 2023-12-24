import { useContext } from "react";
import { ManageContext } from "../_contexts/manageContext";
import { ManageStatusActionEnum } from "../_enums/manageStatusAction.enum";
import { ActionEnum } from "../_enums/action.enum";

export function useSetManageAction(): (action: ActionEnum) => void {
  const { dispatch } = useContext(ManageContext);
  return (action: ActionEnum) => {
    if (dispatch) {
      dispatch({
        type: ManageStatusActionEnum.SET_ACTION,
        payload: { action },
      });
    }
  };
}
