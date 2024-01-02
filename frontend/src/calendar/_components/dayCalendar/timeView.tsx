import React from "react";
import { TimeViewBackground } from "./timeViewBackground";
import { TimeViewContent } from "./timeViewContent";
import "@/calendar/_styles/dayCalendar.css";

export function TimeView() {
    return (<div className="wrapper">
        <TimeViewBackground />
        <TimeViewContent />
    </div>)
}