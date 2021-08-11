// import {makeStyles} from "@material-ui/core/styles";
import {
        Button,
    Chip,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText, Tooltip
} from "@material-ui/core";
import {Link} from "react-router-dom";
import React from "react";
import Icon from "../Icon";

// const useStyles = makeStyles((theme) => ({}))

const MiniCardTechnic = ({el, keys}) => {

    // const classes = useStyles();
    return (
        <ListItem component={Link} key={el} to={`/technics/${el.id}`} button>

            <ListItemIcon>
                <Icon type={el.type} />
            </ListItemIcon>
            <ListItemText
                primary={`[${!el.invent ?
                    <Button color="secondary">Заполнить</Button> : el.invent}] - ${el.name}`}
                secondary={`${el.year} ${el.user}`}
            />
            <ListItemSecondaryAction style={{display: "flex"}}>
                {Object.keys(keys).map(key => {
                    if (!el[keys[key].key]) {
                        return <Tooltip key={key} title={keys[key].name}><span style={{
                            display: "block",
                            width: "10px",
                            textAlign: "center",
                            color: "white",
                            marginRight: "2px",
                            background: keys[key].bg
                        }}>!</span></Tooltip>
                    }
                })}
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default MiniCardTechnic