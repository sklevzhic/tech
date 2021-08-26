import React, {useEffect} from "react";
import Chip from "@material-ui/core/Chip";
import {useHistory} from "react-router-dom";
import Icon from "../Icon";

const ActiveCategories = ({categories, handlerCategory}) => {
    let history = useHistory();

    const categoriesElements = categories.map((el, i) => {
        let type = Object.keys(el)[0]
        let value = Object.values(el)[0]
        return <Chip style={{cursor: "pointer"}} onClick={() => handlerCategory(type, value)} key={i}
                     avatar={<Icon type={type}></Icon>} label={value}/>
    }) // Генерация карточек по кабинетам

    const generateUrl = (arr) => {
        let str = categories.map(el => {
            if (el.length === 0) {
                return null
            } else {
                return `${Object.keys(el)}=${Object.values(el)}`
            }
        })
        return str.filter(n => n).join('&')
    } // Генерация URL на основе активных категорий
    // useEffect(() => {
    //     let urlData = generateUrl(categories)
    //     history.push({
    //         search: `${(urlData === '&') ? '' : urlData}`
    //     });
    // }, [categories])
    // let a = generateUrl(categories)
    return (
        <>
            {categoriesElements}
        </>
    )
}

export default ActiveCategories