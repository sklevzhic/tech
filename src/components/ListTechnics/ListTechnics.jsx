import {Card, List} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import MiniCardTechnic from "../MiniCardTechnic";
import MiniCardTechnicSkeleton from "../MiniCardTechnic/MiniCardTechnicSceleton";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import groupArray from "../global/groupArray";

const useStyles = makeStyles((theme) => ({
    roomItem: {
        marginTop: "20px",
        padding: "7px"
    },
    roomNumber: {}
}));

const ListTechnics = ({technicsByCategory, toogleLoadingInfoFotType, categories}) => {
    const classes = useStyles();
    const generateCondition = (el) => {

        console.log(groupArray(categories));
        return categories.every(category => (el[Object.keys(category)] === category[Object.keys(category)]))
    }
    const checkItem = (el) => {
        return (generateCondition(el)) ? true : false
    }
    const checkObj = (obj) => {
        let a = obj.some(el => checkItem(el))
        return a
    }
    const Cardd = ({el}) => {
        return <Card key={el.room} className={classes.roomItem}>
            <Typography variant={"h5"} className={`${classes.roomNumber}`}>
                {!(Number.parseInt(el.room)) ? el.room : `${el.room} кабинет`}

            </Typography>

            <List dense>
                {el.properties.map((el1, i) => {
                    return !toogleLoadingInfoFotType
                        ? <MiniCardTechnic key={i} el={el1}/>
                        : <MiniCardTechnicSkeleton key={i}/>
                })}
            </List>
        </Card>
    }
    const filteredTechnics = technicsByCategory.map((obj,i) => {
        if (categories.length === 0) {
            return <Cardd key={i} el={obj}/>
        } else {
            if (checkObj(obj.properties)) {
                return <Cardd key={i} el={obj} />
            } else {
                return null
            }
        }
    })

    return (
        <>
            {filteredTechnics}
        </>
    )
}

export default ListTechnics
