
import { useMemo } from "react";
import { useGetCalendarDateUtils } from "../_hooks/useGetCalendarDateUtils";
import { CalendarModalContainer } from "./modal/calendarModalContainer";
import { CalendarModalProvider } from "./providers/calendarModalProvider";

const NUMBER_OF_WEEk_DAYS = 7
const NUMBER_OF_MONTHS = 12
const NUMBER_OF_ROWS = 5

export interface MonthYearCalendarProps {
    readonly referenceDate?: Date
}
export function YearCalendar({ referenceDate }: MonthYearCalendarProps) {
    const { startOfYear, addMonths } = useGetCalendarDateUtils()
    const initDate = startOfYear(referenceDate ?? new Date())
    const months = Array(NUMBER_OF_MONTHS).fill(0).map((_, index) => {
        const date = addMonths(initDate, index)
        return ({ index, date })
    })
    return (<CalendarModalProvider>
        <CalendarModalContainer />
        <div className="calendar-wrapper" style={{
            flex: '1 1 auto',
            overflow: 'hidden',
            position: 'relative',
            height: "100%"
        }}>
            <main className="calendar-container" role="main" style={{
                overflow: 'hidden',
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                outline: 'none'
            }}>
                <div className="calendar-grid" style={{
                    paddingRight: '32px',
                    paddingTop: '8px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    WebkitBoxPack: 'justify',
                    justifyContent: 'space-between',
                    alignContent: 'flex-start',
                }}>
                    {months.map(month => <Month key={month.index} referenceDate={month.date} />)}
                </div>
            </main>
        </div>
    </CalendarModalProvider>)
}

export interface MonthProps {
    readonly referenceDate: Date
}
export function Month({ referenceDate }: MonthProps) {
    const { startOfWeek } = useGetCalendarDateUtils()
    const initDate = startOfWeek(referenceDate)

    return (<div
        className="calendar-item"
        style={{
            minWidth: '224px',
            flexBasis: '25%',
            minHeight: '252px',
        }}>
        <div
            className="calendar-item-container"
            style={{
                width: '208px',
                padding: '0 14px 16px 19px',
                userSelect: 'none',
                position: 'relative',
            }}>

            <MonthTitle initDate={initDate} />
            <MonthContent
                initDate={initDate}
                referenceDate={referenceDate} />


        </div>
    </div>)
}

export interface MonthTitleProps {
    readonly initDate: Date
}
export function MonthTitle({ initDate }: MonthTitleProps) {
    const { format } = useGetCalendarDateUtils()
    return (
        <div
            className="calendar-item-title"
            style={{
                height: '32px',
                fontSize: '12px',
                fontWeight: '400',
                color: 'rgb(60,64,67)',
                display: 'flex',
                WebkitBoxAlign: 'center',
                alignItems: 'center',
                marginLeft: '4px',
                marginRight: '3px',
            }}>
            <span className="calendar-item-title-label" style={{
                color: '#70757a',
                WebkitBoxFlex: '1',
                flexGrow: '1',
                paddingLeft: '5px',
                fontFamily: '"Google Sans",Roboto,Arial,sans-serif',
                fontSize: '14px',
                fontWeight: '500',
                letterSpacing: '.25px',
                lineHeight: '20px',
            }}>
                {format(initDate, 'LLLL')}
            </span>
        </div>)
}

export interface HeaderDay {
    index: number
    date: Date
    title: string
}
export interface MonthContentProps {
    readonly initDate: Date
    readonly referenceDate: Date
}
export function MonthContent({ initDate, referenceDate }: MonthContentProps) {
    const { addDays, getDay, format } = useGetCalendarDateUtils()
    const weekDays = Array(NUMBER_OF_WEEk_DAYS).fill(0).map((_, index) => {
        const date = addDays(initDate, index + 1);
        return ({ index, date, day: getDay(date), title: format(date, 'E').charAt(0) } as HeaderDay)
    })
    const rows = Array(NUMBER_OF_ROWS).fill(0).map((_, index) => index)
    return (<div
        className="calendar-item-content"
        style={{
            display: 'table',
            tableLayout: 'fixed',
            width: '100%',
            textAlign: 'center',
        }}>
        <MonthContentHeader weekDays={weekDays} />
        <MonthContentBody
            initDate={initDate}
            weekDays={weekDays}
            rows={rows}
            referenceDate={referenceDate}
        />

    </div>)
}

export interface MonthContentHeaderProps {
    readonly weekDays: Array<HeaderDay>
}
export function MonthContentHeader({ weekDays }: MonthContentHeaderProps) {
    return (<div
        className="calendar-item-content-header"
        style={{
            display: 'table-row',
            height: '28px',
        }}>
        {weekDays.map(weekDay => <div
            key={weekDay.index}
            className="calendar-item-content-header-item"
            style={{
                fontSize: '12px',
                fontWeight: '400',
                color: '#70757a',
                display: 'table-cell',
                verticalAlign: 'middle',
                outline: 'none',
                textAlign: 'center',
            }}>
            <span style={{ textTransform: 'uppercase' }}>{weekDay.title}</span>
        </div>)}
    </div>)
}

export interface MonthContentBodyProps {
    readonly initDate: Date
    readonly weekDays: Array<HeaderDay>
    readonly rows: Array<number>
    readonly referenceDate: Date
}
export function MonthContentBody({ initDate, weekDays, rows, referenceDate }: MonthContentBodyProps) {
    return (<div
        className="calendar-item-content-body"
        style={{ display: 'table-row-group' }}>

        {rows.map(row => <MonthContentBodyRow
            key={row}
            initDate={initDate}
            weekDays={weekDays}
            referenceDate={referenceDate}
            row={row}
        />)}
    </div>)
}

export interface MonthContentBodyRowProps {
    readonly initDate: Date
    readonly weekDays: Array<HeaderDay>
    readonly row: number
    readonly referenceDate: Date
}
export function MonthContentBodyRow({ initDate, weekDays, row, referenceDate }: MonthContentBodyRowProps) {
    const weekDaysLength = weekDays.length
    return (<div
        className="calendar-item-content-body-row"
        style={{
            display: 'table-row',
            height: '28px'
        }}>

        {weekDays.map(weekDay => <MonthContentBodyWeekRow
            key={weekDay.index}
            initDate={initDate}
            weekDay={weekDay}
            weekDaysLength={weekDaysLength}
            referenceDate={referenceDate}
            row={row}
        />)}

    </div>)
}


export interface MonthContentBodyWeekRowProps {
    readonly initDate: Date
    readonly weekDay: HeaderDay
    readonly weekDaysLength: number
    readonly row: number
    readonly referenceDate: Date
}
export function MonthContentBodyWeekRow({
    initDate,
    weekDay,
    weekDaysLength,
    row,
    referenceDate
}: MonthContentBodyWeekRowProps) {
    const { addDays, isSameMonth } = useGetCalendarDateUtils()
    const date = useMemo(() => addDays(initDate, ((weekDaysLength * row) + weekDay.index)), [addDays, initDate, row, weekDay.index, weekDaysLength])
    const day = useMemo(() => date.getDate(), [date])
    const backgroundColor = useMemo(() => isSameMonth(referenceDate, date) ? '#FFFFFF' : '#F5F5F5', [date, isSameMonth, referenceDate])
    return (
        <span
            key={weekDay.index}
            className="calendar-item-content-header-item"
            style={{
                cursor: 'pointer',
                outline: 'none',
                position: 'relative',
                display: 'table-cell',
                fontSize: '10px',
                fontWeight: '500',
                verticalAlign: 'middle',
                textAlign: 'center',
                backgroundColor,
            }}>
            <div
                className="calendar-item-content-body-row-item-label"
                style={{
                    width: '24px',
                    height: '24px',
                    lineHeight: '24px',
                    margin: 'auto',
                    borderRadius: '50%',
                    position: 'relative',
                    transition: 'background-color .1s linear',
                    fontSize: '12px',
                    fontWeight: '400',
                }}>{day}</div>
        </span>)
}
/*



*/