import { Grid, IconButton, Pagination } from "@mui/material";
import { GridView as GridViewIcon, TableRows as TableRowsIcon } from '@mui/icons-material';
import { useGetManageContextValue } from "@/manage/_hooks/useGetManageContextValue";
import { CollectionViewEnum } from "@/manage/_enums/collectionView.enum";
import { useSetManageCollectionView } from "@/manage/_hooks/useSetManageCollectionView";
export function CollectionHeader() {
    const {
        state: { collectionView }
    } = useGetManageContextValue<any>()
    const setManageCollectionView = useSetManageCollectionView()
    return (<Grid container>
        <Grid item>
            <Pagination count={10} />
        </Grid>
        <Grid item>

            <IconButton
                size="small"
                aria-label="grid collection view type"
                aria-controls="collection-view-type"
                aria-haspopup="true"
                color={collectionView === CollectionViewEnum.CARD_GRID ? 'primary' : 'inherit'}
                onClick={() => setManageCollectionView(CollectionViewEnum.CARD_GRID)}
            >
                <GridViewIcon />
            </IconButton>

            <IconButton
                size="small"
                aria-label="grid collection view type"
                aria-controls="collection-view-type"
                aria-haspopup="true"
                color={collectionView === CollectionViewEnum.TABLE ? 'primary' : 'inherit'}
                onClick={() => setManageCollectionView(CollectionViewEnum.TABLE)}
            >
                <TableRowsIcon />
            </IconButton>
        </Grid>
    </Grid>)
}