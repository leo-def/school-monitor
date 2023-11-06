import { NavActionTypeEnum } from "../_enums/navActionType.enum";
import { NavAction } from "../_types/navAction";
import { NavState } from "../_types/navState";

export const navReducer = (state: NavState, action: NavAction): NavState => {
  switch (action.type) {
    case NavActionTypeEnum.PUSH: {
      const { item } = action.payload;
      if (!item) {
        return state;
      }
      const prevItem = state.items[item.index - 1];
      item.href = `${prevItem?.href ?? ""}/${item.path}`;
      const items = { ...state.items, [item.index]: item };
      console.log("PUSH", { items, href: item.href, index: item.index });
      return { items, href: item.href, index: item.index };
    }
    case NavActionTypeEnum.BACK: {
      const { item } = action.payload;
      if (!item) {
        return state;
      }
      const items = { ...state.items };
      Object.keys(items).forEach((key) => {
        if (Number(key) > item.index) {
          delete items[Number(key)];
        }
      });
      return { items, href: item.href ?? "", index: item.index };
    }
    case NavActionTypeEnum.RESET: {
      return { items: {} } as NavState;
    }
    default:
      return state;
  }
};
