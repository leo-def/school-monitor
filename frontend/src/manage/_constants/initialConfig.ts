import { ActionEnum } from "../_enums/action.enum";
import { CollectionViewEnum } from "../_enums/collectionView.enum";
import { Actions } from "../_types/config/actions/actions";
import { CollectionConfig } from "../_types/config/collection/collectionConfig";
import { GridConfig } from "../_types/config/collection/grid/gridConfig";
import { TableConfig } from "../_types/config/collection/table/tableConfig";
import { FormsConfig } from "../_types/config/form/formsConfig";
import { FormMap } from "../_types/config/form/formConfig";
import { ManageConfig } from "../_types/config/manageConfig";

export const initialConfig = {
  collection: {
    view: CollectionViewEnum.TABLE,
    grid: {
      itemDisplay: undefined,
    } as GridConfig,
    table: {
      columns: [],
    } as TableConfig,
  } as CollectionConfig,
  form: {
    fieldsetDisplay: undefined,
    map: {
      update: undefined,
      create: undefined,
    } as FormMap<unknown>,
  } as FormsConfig<unknown>,
  actions: {
    onUpdate: undefined,
    onCreate: undefined,
    onDelete: undefined,
    onFetch: undefined,
  } as Actions<unknown>,
} as ManageConfig<unknown>;
