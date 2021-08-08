import React, {useEffect, useState} from "react";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import {useHistory} from "react-router-dom";

const ActiveCategories = ({yearsStart, buildsStart}) => {

    const generateUrl = (array) => {
        return array.map(el => {
            if (el.array.length === 0) {
                return null
            } else {
                return `${el.query}=${el.array}`
            }
        }).join('&')
    }
    let history = useHistory();

    useEffect(() => {
        let urlData = generateUrl(
            [
                {query: "years", array: yearsStart},
                {query: "builds", array: buildsStart},
            ]
        )
        history.push({
            search: `${(urlData === '&') ? '' : urlData}`
        });

//переделать получение данных с url
        // [
        //     {type: years, arr: yearsStart},
        //     {type: builds, arr: buildsStart},
        // ].map(el => {
        //     (el.type !== undefined) && el.type.split(",").map(elArr => {
        //         el.arr.push(elArr)
        //     })
        // })

    }, [yearsStart, buildsStart])  // получение данных с url

    return (
        <>
            {yearsStart.map(el => {
                return <Chip key={el} avatar={<Avatar>Y</Avatar>} label={el}/>
            })}
            {buildsStart.map(el => {
                return <Chip key={el} avatar={<Avatar>B</Avatar>} label={el}/>
            })}
        </>
    )
}

export default ActiveCategories