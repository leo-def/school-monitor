
import React, { PropsWithChildren, useCallback, useContext, useEffect, useMemo } from "react"
import { usePathname } from 'next/navigation'
import { NavItem } from "../_types/navItem"
import { NavContext } from "../_contexts/navContext"
import { NavActionTypeEnum } from "../_enums/navActionType.enum"

export interface NavPageLoaderProps extends PropsWithChildren {
    readonly item: NavItem
}
export default function NavPageLoader({ children, item }: NavPageLoaderProps) {
    const pathName = usePathname()
    const { dispatch, state } = useContext(NavContext);
    const { items, index } = state
    const currItem = useMemo(() => Object.values(items).find(val => val.index === item.index), [items, item])

    const push = useCallback(
        (item: NavItem) => {
            if (!dispatch) {
                return;
            }
            dispatch({
                type: NavActionTypeEnum.PUSH,
                payload: { item },
            });
        },
        [dispatch],
    )

    const back = useCallback(
        (item: NavItem) => {
            if (!dispatch) {
                return;
            }
            dispatch({
                type: NavActionTypeEnum.BACK,
                payload: { item },
            });
        },
        [dispatch],
    )


    useEffect(() => {
        if (!currItem && index === item.index - 1) {
            push(item);
        }
    }, [push, index, item, currItem])


    useEffect(() => {
        if (!currItem && item.index === 0 && index === null) {
            push(item);
        }
    }, [push, index, item, currItem])

    useEffect(() => {
        if (index !== null && index > item.index && currItem?.href === pathName) {
            back(item)
        }
    }, [back, index, item, currItem, pathName])

    return (<React.Fragment>{children}</React.Fragment >)
}