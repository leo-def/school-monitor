import React from "react"
import apiFetch from "@/commons/api"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, tableCellClasses } from "@mui/material"
import { Meal } from "../_types/meal"
import { MealDetails } from "./mealDetails"

export function MealTable() {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.grey[700],
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const meals = apiFetch('/meal') as Array<Meal>
    const types = [
        { type: "BREAKFAST", label: "Café da manhã" },
        { type: "LUNCH", label: "Almoço" },
        { type: "DINNER", label: "Jantar" }
    ] as Array<{ type: string; label: string }>
    const weekDays = (
        [
            { weekDays: "MONDAY", label: "Segunda feira" },
            { weekDays: "TUESDAY", label: "Terça feira" },
            { weekDays: "WEDNESDAY", label: "Quarta feira" },
            { weekDays: "THURSDAY", label: "Quinta feira" },
            { weekDays: "FRIDAY", label: "Sexta feira" },
        ] as Array<{ weekDays: string; label: string }>
    )
    const getMeal = (weekDays: string, type: string) => {
        return meals.find((item) => item.weekDays === weekDays && item.type === type)
    }
    return (
        <TableContainer component={Paper} style={{
            marginLeft: 2, minWidth: 650, maxWidth: '99vw'
        }}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Dia da semana</StyledTableCell>
                        {types.map((type) => (<StyledTableCell key={type.type}>{type.label}</StyledTableCell>))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {weekDays.map((weekDay) =>
                        <StyledTableRow key={weekDay.weekDays}>
                            <StyledTableCell component="th" variant="head">
                                {weekDay.label}
                            </StyledTableCell>
                            {types.map((type) => (<StyledTableCell key={`${weekDay.weekDays}-${type.type}`}> <MealDetails item={getMeal(weekDay.weekDays, type.type)} />  </StyledTableCell>))}
                        </StyledTableRow>
                    )
                    }
                </TableBody>
            </Table>
        </TableContainer >
    )
}