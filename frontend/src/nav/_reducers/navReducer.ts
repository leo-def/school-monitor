import { NavActionTypeEnum } from "../_enums/navActionType.enum";
import { NavAction } from "../_types/navAction";
import { NavState } from "../_types/navState";

export const navReducer = (state: NavState, action: NavAction): NavState => {
  const getItem = () => {
    return action.payload.item;
  };

  switch (action.type) {
    case NavActionTypeEnum.PUSH: {
      const { items } = state;
      const item = getItem();
      if (!item) {
        return state;
      }
      item.index = item.index ?? Object.keys(items).length;
      if (items[item.index]?.id === item.id) {
        return state;
      }
      items[item.index] = item;
      return { items } as NavState;
    }
    case NavActionTypeEnum.RESET: {
      return { items: {} } as NavState;
    }
    default:
      return state;
  }
};
