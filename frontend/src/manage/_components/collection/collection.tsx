import React, { useEffect } from "react"
import { useSetManageFetchResult } from "@/manage/_hooks/useSetManageFetchResult"
import { CollectionViewEnum } from "../../_enums/collectionView.enum"
import { useGetManageContextValue } from "../../_hooks/useGetManageContextValue"
import { Table } from "./table/table"
import { CardGrid } from "./grid/cardGrid"
import { CollectionHeader } from "./collectionHeader"

export function Collection() {
    const {
        state: { fetchParams, fetchResult, collectionView },
        config: { actions: { onFetch } }
    } = useGetManageContextValue<any>()
    const setFetchResult = useSetManageFetchResult<any>()
    const showTable = collectionView === CollectionViewEnum.TABLE
    const showCardGrid = collectionView === CollectionViewEnum.CARD_GRID
    useEffect(() => {
        if (onFetch && fetchParams && fetchParams !== fetchResult?.params) {
            onFetch(fetchParams).then(result => setFetchResult(result))
        }
    }, [onFetch, fetchResult, setFetchResult, fetchParams])


    return (<React.Fragment>
        <CollectionHeader />
        {showTable ? <Table /> : undefined}
        {showCardGrid ? <CardGrid /> : undefined}
    </React.Fragment>)
}
