import { useContext } from "react";
import { WaitingContext } from "../_contexts/waitingContext";
import { WaitingActionTypeEnum } from "../_enums/waitingActionType.enum";

export function useStartWaitingTask(): (task: string) => void {
  const { dispatch } = useContext(WaitingContext);
  return (task: string) => {
    if (dispatch) {
      dispatch({
        type: WaitingActionTypeEnum.ADD_TASK,
        payload: { task },
      });
    }
  };
}
