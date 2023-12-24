import { Grid } from "@mui/material"
import { useGetManageContextValue } from "../../../_hooks/useGetManageContextValue"
import { CardGridItem } from "./cardGridItem"

export function CardGrid() {
    const {
        state: { fetchResult: { items } }
    } = useGetManageContextValue<any>()
    return (<Grid container>{items.map((item, index) => <CardGridItem key={JSON.stringify(item)} item={item} />)}</Grid>)
}