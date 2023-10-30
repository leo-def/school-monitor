import { NavActionTypeEnum } from "../_enums/navActionType.enum";
import { NavAction } from "../_types/navAction";
import { NavItem } from "../_types/navItem";
import { NavState } from "../_types/navState";

export const navReducer = (state: NavState, action: NavAction): NavState => {

  switch (action.type) {
    case NavActionTypeEnum.PUSH: {
      const { item, pathName } = action.payload
      if (!item) {
        return state;
      }
      const prevItem = state.items[item.index-1] 
      const currItem = state.items[item.index]
      item.href = `${prevItem?.href ??''}/${item.path}`
      if(item.index < state.index && pathName === item.href) {
        const items = {...state.items}
          Object.keys(items).forEach( (key) => {
            if(Number(key) > item.index){
              delete items[Number(key)]
            }
          })
          return { items, href: item.href, index: item.index}
      } else if(currItem?.href !== item.href) {
        const items = {...state.items, [item.index]: item}
        const sorted = Object.values(items).sort((a, b) => a.index - b.index)
        const last = sorted[sorted.length-1]
        return { items, href: last.href, index: item.index}
      } else {
        return state
      }

    }
    case NavActionTypeEnum.RESET: {
      return { items: {} } as NavState;
    }
    default:
      return state;
  }
};
