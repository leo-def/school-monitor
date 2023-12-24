import { useContext } from "react";
import { ManageContext } from "../_contexts/manageContext";
import { ManageStatusActionEnum } from "../_enums/manageStatusAction.enum";
import { FetchParams } from "../_types/status/params/fetchParams";

export function useUpdateManageFetchParams(): (
  fetchParams: FetchParams
) => void {
  const { dispatch } = useContext(ManageContext);
  return (fetchParams: FetchParams) => {
    if (dispatch) {
      dispatch({
        type: ManageStatusActionEnum.UPDATE_FETCH_PARAMS,
        payload: { fetchParams },
      });
    }
  };
}
