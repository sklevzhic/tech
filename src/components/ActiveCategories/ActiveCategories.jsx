import React, {useEffect} from "react";
import Chip from "@material-ui/core/Chip";
import {useHistory} from "react-router-dom";
import Icon from "../Icon";

const ActiveCategories = ({categories}) => {
    const generateUrl = (arr) => {
        let str = Object.keys(categories).map(key => {
            if (categories[key].length === 0) {
                return null
            } else {
                return `${key}=${categories[key]}`
            }
        })
        return str.filter(n => n).join('&')
    } // Генерация URL на основе активных категорий
    let history = useHistory();
    const categoriesElements = categories.map((el,i) => {
        let type = Object.keys(el)[0]
        let value = Object.values(el)[0]
        return <Chip key={i} avatar={<Icon type={type}></Icon>} label={value}/>
    }) // Генерация карточек по кабинетам

    useEffect(() => {
        let urlData = generateUrl(categories)
        history.push({
            search: `${(urlData === '&') ? '' : urlData}`
        });
    }, [categories])
    return (
        <>
            {categoriesElements}
        </>
    )
}

export default ActiveCategories