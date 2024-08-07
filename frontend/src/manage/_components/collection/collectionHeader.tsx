import { useMemo, useCallback, ChangeEvent } from "react";
import { Accordion, AccordionSummary, FormControl, Grid, IconButton, InputLabel, MenuItem, Pagination, Select, SelectChangeEvent } from "@mui/material";
import { GridView as GridViewIcon, TableRows as TableRowsIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { useGetManageContextValue } from "@/manage/_hooks/useGetManageContextValue";
import { CollectionViewEnum } from "@/manage/_enums/collectionView.enum";
import { useSetManageCollectionView } from "@/manage/_hooks/useSetManageCollectionView";
import { useUpdateManageFetchParams } from "@/manage/_hooks/useUpdateManageFetchParams";
import { FetchParams } from "@/manage/_types/status/params/fetchParams";

export function CollectionHeader() {
    const {
        state: { fetchParams, fetchResult, collectionView },
        config
    } = useGetManageContextValue<any>()
    const {
        collection: {
            filter
        }
    } = config
    const {
        map,
        id,
        Display
    } = filter
    const updateManageFetchParams = useUpdateManageFetchParams()
    const setManageCollectionView = useSetManageCollectionView()
    const count = fetchResult?.count ?? 0
    const limit = fetchParams?.limit ?? 10
    const pages = useMemo(() => count ? (count / limit) + (count % limit) : 1, [count, limit])
    const values = useMemo(() => map ? map(fetchParams) : fetchParams, [map, fetchParams])
    const disabled = filter.disabled ?? config.disabled

    const handleOnCollectionViewChange = useCallback((collectionView: CollectionViewEnum) => {
        setManageCollectionView(collectionView)
    }, [setManageCollectionView])

    const handleOnFilterChange = useCallback(async (values: Partial<FetchParams>) => {
        updateManageFetchParams(values)
    }, [updateManageFetchParams])

    const handleOnPageChange = useCallback((_event: ChangeEvent<unknown>, page: number) => {
        updateManageFetchParams({ page } as Partial<FetchParams>)
    }, [updateManageFetchParams])

    const handleOnLimitChange = useCallback((event: SelectChangeEvent) => {
        const limit = Number(event.target.value);
        updateManageFetchParams({ limit } as Partial<FetchParams>)
    }, [updateManageFetchParams])

    const pageOptions = filter.pageOptions ?? [5, 10, 20, 50, 100]
    const limitInputLabel = filter.limitInputLabel ?? "Rows per page"
    return (
        <Grid container>
            <Grid container item xs={12} alignItems="center">
                <Grid item xs={6} lg={5}>
                    <Pagination
                        showFirstButton
                        showLastButton
                        hidePrevButton
                        hideNextButton
                        disabled={disabled}
                        count={pages}
                        onChange={handleOnPageChange} />
                </Grid>
                <Grid item xs={6} lg={2}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">{limitInputLabel}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={String(limit)}
                            size="small"
                            disabled={disabled}
                            label={limitInputLabel}
                            onChange={handleOnLimitChange}
                        >
                            {pageOptions.map((page: number) => <MenuItem key={page} value={page}>{page}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} lg={2}>

                    <IconButton
                        size="small"
                        aria-label="grid collection view type"
                        aria-controls="collection-view-type"
                        aria-haspopup="true"
                        disabled={disabled}
                        color={collectionView === CollectionViewEnum.CARD_GRID ? 'primary' : 'inherit'}
                        onClick={() => handleOnCollectionViewChange(CollectionViewEnum.CARD_GRID)}
                    >
                        <GridViewIcon />
                    </IconButton>

                    <IconButton
                        size="small"
                        aria-label="grid collection view type"
                        aria-controls="collection-view-type"
                        aria-haspopup="true"
                        disabled={disabled}
                        color={!collectionView || collectionView === CollectionViewEnum.TABLE ? 'primary' : 'inherit'}
                        onClick={() => handleOnCollectionViewChange(CollectionViewEnum.TABLE)}
                    >
                        <TableRowsIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={6} lg={3}>
                    
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={
                            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                                <ExpandMoreIcon />
                            </IconButton>}
                        aria-controls="collection-header-filter-content"
                        id="collection-header-filter-header"
                    >
                        {Display ? <Display id={id} values={values} disabled={disabled} onChange={handleOnFilterChange} /> : undefined}
                    </AccordionSummary>
                </Accordion>

            </Grid>
        </Grid>)
}