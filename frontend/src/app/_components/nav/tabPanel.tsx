import { PropsWithChildren } from "react";

export function TabPanel({ index, value, children }: { index: number, value: number } & PropsWithChildren) {
    return value === index ? children : undefined
}