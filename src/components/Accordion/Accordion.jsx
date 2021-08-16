import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import countDays from "../global/countDays";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    details: {
        flexDirection: "column"
    }
}));

export default function ControlledAccordions({array}) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const refillsGroup = (arr) => {
        let years = arr.map(el => {
            return new Date(el.receiverDate).getFullYear()
        }).sort((a, b) => b - a)
        let uniqueYears = [...new Set(years.map((year) => year))]

        return uniqueYears.map(year => {
            return <>
                <p>{year} год</p>
                <ul>
                    {arr.map((el) => {
                        if (new Date(el.receiverDate).getFullYear() === year) {
                            return <Accordion expanded={expanded === el.id} onChange={handleChange(el.id)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls={`${el.id}bh-content`}
                                    id={`${el.id}bh-content`}
                                >
                                    <Typography className={classes.heading}>{el.receiverDate}</Typography>
                                    <Typography className={classes.secondaryHeading}>{el.receiverName}</Typography>
                                </AccordionSummary>
                                <AccordionDetails className={classes.details}>
                                    <Typography variant={"p"}>Дата заявки: {el.report}</Typography>
                                    <Typography variant={"p"}><Typography variant={"subtitle2"}
                                                                          component={"span"}>({countDays(el.report, el.transmissionDate)} дней)</Typography> Дата
                                        передачи картриджей в ЦРИТ: {el.transmissionDate}</Typography>
                                    <Typography variant={"p"}><Typography variant={"subtitle2"}
                                                                          component={"span"}>({countDays(el.report, el.dateOfReceiving)} дней)</Typography> Дата
                                        получения картриджей из ЦРИТ: {el.dateOfReceiving}</Typography>
                                    <Typography variant={"p"}><Typography variant={"subtitle2"}
                                                                          component={"span"}>({countDays(el.report, el.receiverDate)} дней)</Typography>Выдача
                                        сотруднику: {el.receiverDate}</Typography>
                                    <Typography variant={"p"}>Сотрудник, который получил
                                        картридж: {el.receiverName}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        }
                        return ''
                    })}
                </ul>
            </>
        })
    }
    return (
        <div className={classes.root}>
            {refillsGroup(array)}
        </div>
    );
}
