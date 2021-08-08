import icons from "../global/global";
import React from "react";
import {Help} from "@material-ui/icons";

const Icon = ({type, types}) => {
    const regexp = /^[а-яА-Я]+$/i;

    const icon = (type) => {
        if (icons[type] !== undefined) {
            let Icon = icons[type]
            return <Icon/>
        } else
        //     if (regexp.test(type)) {
        //     let obj = types.filter(el => el.name === type)
        //     if (icons[obj[0].type] !== undefined) {
        //         let Icon = icons[obj[0].type]
        //         return <Icon/>
        //     } else {
        //         return <Help/>
        //     }
        // } else
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

