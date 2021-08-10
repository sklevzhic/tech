import {Card, CardContent, CardHeader, List} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import MiniCardTechnic from "../MiniCardTechnic";
import MiniCardTechnicSkeleton from "../MiniCardTechnic/MiniCardTechnicSceleton";
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import getProperty from '../global/getProperty'
const useStyles = makeStyles((theme) => ({
    roomItem: {
        marginTop: "20px",
        padding: "7px"
    },
    roomNumber: {}
}));

const ListTechnics = ({technicsByCategory, toogleLoadingInfoFotType, categories}) => {
    const classes = useStyles();
    const filteredTechnics = technicsByCategory.map(el => {
        let str = getProperty(el)
        if ((categories[str].includes(el.room)) || ([...categories[str]].length === 0)) {
            return <Card key={el.room} className={classes.roomItem}>
                <Typography variant={"h5"} className={`${classes.roomNumber}`}>
                    {!(Number.parseInt(el.room)) ? el.room : `${el.room} кабинет`}
                </Typography>
                <List dense>
                    {el.properties.map((el1,i) => {
                        return !toogleLoadingInfoFotType
                            ? <MiniCardTechnic key={i} el={el1}/>
                            : <MiniCardTechnicSkeleton key={i}/>
                    })}
                </List>
                </Card>
        } else {
            return <span>no {el.room}</span>
        }


    })

    return (
        <>
            {filteredTechnics}
        </>
    )
}

export default ListTechnics