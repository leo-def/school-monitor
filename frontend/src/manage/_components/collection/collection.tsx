import React, { useEffect } from "react"
import { useSetManageFetchResult } from "@/manage/_hooks/useSetManageFetchResult"
import { CollectionViewEnum } from "../../_enums/collectionView.enum"
import { useGetManageContextValue } from "../../_hooks/useGetManageContextValue"
import { Table } from "./table/table"
import { CardGrid } from "./grid/cardGrid"
import { CollectionHeader } from "./collectionHeader"
import { ActionEnum } from "@/manage/_enums/action.enum"

export function Collection() {
    const {
        state: { fetchParams, fetchResult, collectionView, action },
        config: { actions: { onFetch } }
    } = useGetManageContextValue<any>()
    const setFetchResult = useSetManageFetchResult<any>()
    const showTable = !collectionView || collectionView === CollectionViewEnum.TABLE
    const showCardGrid = collectionView === CollectionViewEnum.CARD_GRID
    useEffect(() => {
        if (action === ActionEnum.COLLECTION && onFetch && fetchParams && fetchParams !== fetchResult?.params) {
            onFetch(fetchParams).then(result => setFetchResult(result))
        }
    }, [onFetch, fetchResult, setFetchResult, action, fetchParams])


    return (<React.Fragment>
        <CollectionHeader />
        {showTable ? <Table /> : undefined}
        {showCardGrid ? <CardGrid /> : undefined}
    </React.Fragment>)
}
