import {Card, List} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import MiniCardTechnic from "../MiniCardTechnic";
import MiniCardTechnicSkeleton from "../MiniCardTechnic/MiniCardTechnicSceleton";
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    roomItem: {
        marginTop: "20px",
        padding: "7px"
    },
    roomNumber: {}
}));

const ListTechnics = ({technicsByCategory, toogleLoadingInfoFotType, yearsStart}) => {
    const classes = useStyles();

    let filteredTechnics = technicsByCategory.map(key => {
        if (((key.properties.some(function (v) {
            return yearsStart.includes(v.year)
        })) === true) || (yearsStart.length === 0)) {
            return <Card key={key.room} className={classes.roomItem}>
                <Typography variant={"h5"} className={`${classes.roomNumber}`}>
                    {!(Number.parseInt(key.room)) ? key.room : `${key.room} кабинет`}
                </Typography>
                <List dense>
                    {
                        key.properties.map((el, i) => {
                                if ((yearsStart.includes(el.year)) || (yearsStart.length === 0)) {
                                    return !toogleLoadingInfoFotType
                                        ? <MiniCardTechnic key={i} el={el}/>
                                        : <MiniCardTechnicSkeleton key={i}/>
                                }
                            }
                        )
                    }
                </List>
            </Card>
        } else {
            return null
        }
    })


    return (
        <>
            {filteredTechnics}
        </>
    )
}

export default ListTechnics