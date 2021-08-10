import React, {useEffect, useState} from "react";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import {useHistory} from "react-router-dom";
import Icon from "../Icon";

const ActiveCategories = ({categories}) => {
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
    const categoriesElements = Object.keys(categories).map(key => {
       return  categories[key].map(el => {
           return <Chip avatar={<Icon type={key}></Icon>} label={el} />
        })
    })

    useEffect(() => {
        // let urlData = generateUrl( )
        history.push({
            // search: `${(urlData === '&') ? '' : urlData}`
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

    }, [])  // получение данных с url
    return (
        <>
            { categoriesElements }
        </>
    )
}

export default ActiveCategories