import { useContext } from "react";
import { NavActionTypeEnum } from "../_enums/navActionType.enum";
import { NavItem } from "../_types/navItem";
import { NavContext } from "../_contexts/navContext";

export function usePushNavItem(): (user: NavItem) => void {
  const { dispatch } = useContext(NavContext);
  return (item: NavItem) => {
    if (dispatch) {
      dispatch({
        type: NavActionTypeEnum.PUSH,
        payload: { item },
      });
    }
  };
}
