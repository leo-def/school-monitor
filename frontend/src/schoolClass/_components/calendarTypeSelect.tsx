import { CalendarViewTypeEnum } from "@/calendar/_enums/calendarViewType.enum";
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

const keyValueMap: { [x: string]: { value: CalendarTypeProps, label: string } } = {
    [CalendarViewTypeEnum.MONTH]: {
        value: { viewType: CalendarViewTypeEnum.MONTH },
        label: 'Mês'
    },
    [CalendarViewTypeEnum.YEAR]: {
        value: { viewType: CalendarViewTypeEnum.YEAR },
        label: 'Ano'
    },
    [CalendarViewTypeEnum.WEEK]: {
        value: { viewType: CalendarViewTypeEnum.WEEK },
        label: 'Semana'
    },
    [`${CalendarViewTypeEnum.DAY}-${1}`]: {
        value: { viewType: CalendarViewTypeEnum.DAY, numberOfDays: 1 },
        label: 'Dia'
    },
    [`${CalendarViewTypeEnum.DAY}-${4}`]: {
        value: { viewType: CalendarViewTypeEnum.DAY, numberOfDays: 4 },
        label: '4 Dias'
    }
}

export interface CalendarTypeProps {
    viewType: CalendarViewTypeEnum;
    numberOfDays?: number
}

export interface CalendarTypeSelectProps {
    readonly onChange: (value: CalendarTypeProps) => void
}


export function CalendarTypeSelect({ onChange }: CalendarTypeSelectProps) {
    const [value, setValue] = useState(undefined as string | undefined)
    const handleChange = ((event: SelectChangeEvent<string | null>) => {
        const value = event.target.value as string
        setValue(value);
        onChange(keyValueMap[value].value)
    })
    return (<FormControl fullWidth>
        <InputLabel id="calendar-type-select-label">Tipo de calendario</InputLabel>
        <Select
            labelId="calendar-type-select-label"
            id="calendar-type-select"
            value={value}
            label="Tipo de calendario"
            onChange={handleChange}
        >
            {Object.keys(keyValueMap).map(key => (<MenuItem key={key} value={key}>{keyValueMap[key].label}</MenuItem>))}
        </Select>
    </FormControl>)
}