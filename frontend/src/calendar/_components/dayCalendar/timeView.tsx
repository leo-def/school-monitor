import React from 'react'

import { TimeViewBackground } from './timeViewBackground'
import { TimeViewContent } from './timeViewContent'
import '../../_styles/dayCalendar.css'

export function TimeView() {
    return (<div className="wrapper">
        <TimeViewBackground />
        <TimeViewContent />
    </div>)
}