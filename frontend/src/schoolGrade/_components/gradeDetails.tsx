import React from "react"
import { Typography, Slider, Paper, styled } from "@mui/material"
import { SchoolGradeDto } from "../_types/schoolGrade.dto";

export function GradeDetails({ item }: { item?: SchoolGradeDto }) {
    return (
        <Paper elevation={3} sx={{ fontSize: 12, minWidth: 200, width: '100%', padding: 1, margin: 0 }}>
            {item ? <GradeContent item={item} /> : "Nota não informada."}
        </Paper>)
}

function GradeContent({ item }: { item: SchoolGradeDto }) {
    const AppSlider = styled(Slider)(({ theme }) => ({
        marginBottom: 0,
        '& .MuiSlider-mark': {
            opacity: 1,
            height: 8,
            width: 2,
            backgroundColor: 'currentColor',
            '&.MuiSlider-markActive': {
                opacity: 1,
                height: 8,
                width: 2,
                backgroundColor: 'currentColor',
            },
        },
        '& .MuiSlider-markLabel': {
            fontSize: 10,
            top: 18,
            backgroundColor: 'unset',
            color: theme.palette.text.primary,
        }
    }))
    function valuetext(value: number) {
        return `Nota: ${value} / ${item.max}`;
    }
    const marks = [
        {
            value: item.passingScore,
            label: 'média',
        },
    ];
    return (<React.Fragment>
        <Typography sx={{ fontSize: 12 }} color="text.secondary">
            <b>{`Nota: ${item.value} / ${item.max}`}</b>
            <Typography sx={{ fontSize: 10 }} color="text.secondary" component="span">
                {` - Média: ${item.passingScore}`} <br />

                {item.desc}
            </Typography>
        </Typography>
        <hr />
        <AppSlider
            size="small"
            aria-label="Grade"
            getAriaValueText={valuetext}
            step={10}
            valueLabelDisplay="auto"
            marks={marks}
            value={item.value}
            max={item.max}
            valueLabelFormat={valuetext}
            min={item.min}
            color={item.value >= item.passingScore ? "success" : "error"}
        />
    </React.Fragment >)
}