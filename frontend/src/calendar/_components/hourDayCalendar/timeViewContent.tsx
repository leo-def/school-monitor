import React from 'react'
import { DayEventColumn } from './dayEventColumn'
import { CalendarEvent } from '@/calendar/_types/calendarEvent'
import './hourDayCalendar.css'

export function TimeViewContent({
  days,
  numberOfCols,
  dayEvents,
}: {
  days: Array<{ date: Date; isToday: boolean; index: number }>;
  numberOfCols: number;
  dayEvents: Array<CalendarEvent>;
}) {
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
            <DayEventColumn date={day.date} events={dayEvents} />
          </div>
        ))}

        <div style={{ width: "1rem", minHeight: 1200 }}>
          <div style={{ marginLeft: "0.5rem" }}></div>
        </div>
      </div>
    </div>
  );
}
