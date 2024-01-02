import { ActionEnum } from "../_enums/action.enum";
import { ManageStatusState } from "../_types/status/manageStatusState";

export const initialState = {
  selected: undefined,
  action: ActionEnum.COLLECTION,
collectionView: CollectionViewEnum.TABLE,
  fetchParams: {
    page: 0,
    limit: 10,
    sort: [],
    filter: [],
  },
  fetchResult: undefined,
} as ManageStatusState<unknown>;


fetchParams: FetchParams;