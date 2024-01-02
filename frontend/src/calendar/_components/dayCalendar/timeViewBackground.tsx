import React from "react";
import { backgroundBorderLeft, backgroundBorderTop } from "@/calendar/_commons/styles";
import { DAY_HOURS } from "@/calendar/_commons/constants";
import { useGetDayCalendarDisplay } from "@/calendar/_hooks/useGetDayCalendarDisplay";
import "@/calendar/_styles/dayCalendar.css";


export function TimeViewBackground() {
    const { numberOfCols, days } = useGetDayCalendarDisplay()
    return (<div className="background">
        <div style={{
            gridTemplateColumns: `repeat(${numberOfCols}, minmax(0, 1fr))`,
            display: 'grid'
        }}>

            {DAY_HOURS.map((hour) => (<React.Fragment key={hour}>
                <div style={{ height: 50 }}><div className="hour-view-time-label">{`${hour.toString().padStart(2, "0")}:00`}</div></div>
                {days.map((day) =>
                    <div key={day.index} style={{ height: 50, ...backgroundBorderTop }} >
                        <div style={{
                            height: 50,
                            marginLeft: '0.5rem',
                            ...backgroundBorderLeft
                        }}></div>
                    </div>)}

                <div style={{ height: 50, width: '1rem', ...backgroundBorderTop }}>
                    <div style={{ height: 50, marginLeft: '0.5rem', ...backgroundBorderLeft }}></div>
                </div>
            </React.Fragment>))}

            {/* last time row */}
            <div></div>

            {days.map((day) =>
                <div key={day.index} style={{ height: 5, ...backgroundBorderTop }}>
                    <div style={{ height: 5, marginLeft: '0.5rem', ...backgroundBorderLeft }}></div>
                </div>)}

            <div style={{ height: 5, width: '1rem', ...backgroundBorderTop }}>
                <div style={{ height: 5, marginLeft: '0.5rem', ...backgroundBorderLeft }}></div>
            </div>

        </div>
    </div>
    )
}