import { CalendarViewTypeEnum } from "@/calendar/_enums/calendarViewType.enum";
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { useState } from "react";


export interface TermSelectProps {
    viewType: CalendarViewTypeEnum;
    numberOfDays?: number
}

export interface TermSelectSelectProps {
    readonly onChange: (value: string) => void
}


export function TermSelectSelect({ onChange }: TermSelectSelectProps) {
    const [value, setValue] = useState(undefined as string | undefined)
    const handleChange = ((event: SelectChangeEvent<string | null>) => {
        const value = event.target.value as string
        setValue(value);
        if (onChange) {
            onChange(value)
        }
    })
    const terms = new Array<string>()
    return (<FormControl fullWidth>
        <InputLabel id="calendar-type-select-label">Tipo de calendario</InputLabel>
        <Select
            labelId="calendar-type-select-label"
            id="calendar-type-select"
            value={value}
            label="Tipo de calendario"
            onChange={handleChange}
        >
            {terms.map(key => (<MenuItem key={key} value={key}>{key}</MenuItem>))}
        </Select>
    </FormControl>)
}