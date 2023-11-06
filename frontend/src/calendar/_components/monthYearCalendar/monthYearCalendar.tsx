import { addDays, format, getDay, setMonth, startOfMonth, startOfWeek } from "date-fns"

const NUMBER_OF_WEEk_DAYS = 7
const NUMBER_OF_MONTHS = 12

export interface MonthYearCalendarProps {
    readonly referenceDate?: Date
}
export function MonthYearCalendar({ referenceDate }: MonthYearCalendarProps) {
    const rows = Array(NUMBER_OF_MONTHS).fill(0).map((_, index) => index)
    return (<div className="calendar-wrapper" style={{
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
            {rows.map(month => <Month key={month} month={month} referenceDate={referenceDate} />)}
        </main>
    </div>)
}

export interface MonthProps {
    readonly month: number,
    readonly referenceDate?: Date
}
export function Month({ month, referenceDate }: MonthProps) {
    const firstDayOfMonth = startOfMonth(setMonth(referenceDate ?? new Date(), month))
    const initDate = startOfWeek(firstDayOfMonth)
    const weekDays = Array(NUMBER_OF_WEEk_DAYS).fill(0).map((_, index) => {
        const date = addDays(initDate, index);
        return ({ index, date, day: getDay(date), title: format(date, 'eee') })
    })
    return (

        <div className="month">
            <table>
                <thead>
                    <tr>
                        {weekDays.map(weekDay => <th key={weekDay.index}></th>)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>)
}