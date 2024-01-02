import React from "react";
import { useGetDayCalendarDisplay } from "@/calendar/_hooks/useGetDayCalendarDisplay";
import "@/calendar/_styles/dayCalendar.css";
import { DayEventColumn } from "./dayEventColumn";

export function TimeViewContent() {
  const { numberOfCols, days } = useGetDayCalendarDisplay()
  return (
    <div className="content">
      <div
        style={{
          gridTemplateColumns: `repeat(${numberOfCols}, minmax(0, 1fr))`,
          display: "grid",
        }}
      >
        <div style={{ minHeight: 1200 }}></div>

        {days.map((day) => (
          <div key={day.index} style={{ minHeight: 1200, overflow: 'hidden', position: 'relative' }}>
            <DayEventColumn date={day.date} />
          </div>
        ))}

        <div style={{ width: "1rem", minHeight: 1200 }}>
          <div style={{ marginLeft: "0.5rem" }}></div>
        </div>
      </div>
    </div>
  );
}
