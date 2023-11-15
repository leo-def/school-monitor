import { useGetMonthCalendarDisplay } from "@/calendar/_hooks/useGetMonthCalendarDisplay";

export function BodyRowBackground() {
    const { weekDays } = useGetMonthCalendarDisplay()
    return (<div className="calendar-body-row-background" style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
    }}>
        {weekDays.map(weekDay =>
            <div
                key={weekDay.index}
                className="calendar-body-row-background-column"
                style={{
                    borderRight: 'rgb(218,220,224) 1px solid',
                    flex: '1 1 0%',
                }}></div>)}
    </div>)
}