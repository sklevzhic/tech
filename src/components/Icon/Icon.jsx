import icons from "../global/global";
import React from "react";
import {Help} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
        size: {
            fontSize: "70px"
        }
    }
))

const Icon = ({type, size}) => {
    const classes = useStyles();
    const icon = (type) => {
        if (icons[type] !== undefined) {
            let Icon = icons[type]
            return <Icon className={(size) ? classes.size : null}/>
        } else

        {
            return <Help/>
        }
    }

    return (
        <>
            {icon(type)}
        </>
    )
}
export default Icon

