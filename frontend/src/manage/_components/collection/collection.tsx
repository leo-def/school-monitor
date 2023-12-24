import { Table } from "@mui/material"
import React, { useEffect } from "react"
import { CollectionViewEnum } from "../../_enums/collectionView.enum"
import { useGetManageContextValue } from "../../_hooks/useGetManageContextValue"
import { CardGrid } from "./grid/cardGrid"
import { CollectionHeader } from "./collectionHeader"
import { useSetManageFetchResult } from "@/manage/_hooks/useSetManageFetchResult"

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
