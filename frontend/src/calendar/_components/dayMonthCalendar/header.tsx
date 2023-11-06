import React from "react";

export function Header({ weekDays }: { weekDays: Array<{ index: number, date: Date, day: number, title: string }> }) {
    return (<div
        className="calendar-header"
        role="row"
        style={{
            margin: 0,
            WebkitBoxAlign: 'stretch',
            WebkitAlignItems: 'stretch',
            alignItems: 'stretch',
            display: 'flex',
            WebkitBoxFlex: 0,
            WebkitFlex: 'none',
            flex: 'none',
            height: '20px',
        }}>
        {weekDays.map(weekDay =>
            <div
                key={weekDay.index}
                className="calendar-header-column"
                role="columnheader"
                style={{
                    borderRight: 'rgb(218,220,224) 1px solid',
                    WebkitBoxFlex: '1',
                    WebkitFlex: '1 1 0%',
                    flex: '1 1 0%',
                    textAlign: 'center',
                    fontFamily: 'Roboto,Arial,sans-serif',
                    textTransform: 'uppercase',
                }}>
                <span
                    className="calendar-header-title"
                    style={{
                        color: '#70757a',
                        fontSize: '11px',
                        fontWeight: '500',
                        lineHeight: '20px'
                    }}>
                    {weekDay.title}
                </span>
            </div>)
        }

    </div >)

}