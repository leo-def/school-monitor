import { Grid } from "@mui/material"
import { useGetManageContextValue } from "../../../_hooks/useGetManageContextValue"
import { CardGridItem } from "./cardGridItem"

export function CardGrid() {
    const {
        state: { fetchResult }
    } = useGetManageContextValue<any>()
    const items = fetchResult?.items ?? []
    return (<Grid container>{items.map((item: any) => <CardGridItem key={JSON.stringify(item)} item={item} />)}</Grid>)
}