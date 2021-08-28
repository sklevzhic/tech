import Chip from "@material-ui/core/Chip";
import Icon from "../Icon";

const ActiveCategories = ({categories, handlerCategory}) => {

    const categoriesElements = categories.map((el, i) => {
        let type = Object.keys(el)[0]
        let value = Object.values(el)[0]
        return <Chip style={{cursor: "pointer"}} onClick={() => handlerCategory(type, value)} key={i}
                     avatar={<Icon type={type}></Icon>} label={value}/>
    })

    return (
        <>
            {categoriesElements}
        </>
    )
}

export default ActiveCategories