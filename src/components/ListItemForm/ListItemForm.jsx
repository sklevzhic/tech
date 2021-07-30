import {ListItem, ListItemIcon, ListItemText, TextField} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import icons from "../global/global";
import {makeStyles} from "@material-ui/core/styles";
import AutocompleteTextarea from "../AutocompleteTextarea";


const useStyles = makeStyles((theme) => ({
    listItemText: {
        fontSize: '1.1em',
        fontWeight: "bold"
    }
}))

const ListItemForm = ({activeTechnic, property, text}) => {

    const classes = useStyles();

    const getIcon = (val, size) => {
        let Icon = icons[val]
        return <Icon style={{fontSize: `${size}px`}}/>
    }
    const [editMode, setEditMode] = useState(false)
    const editPropertyTechnic = () => {
        setEditMode(true)
    }

    return <ListItem onDoubleClick={() => editPropertyTechnic(activeTechnic, property)}>
        <ListItemIcon>
            <Avatar>{getIcon(property)}</Avatar>
        </ListItemIcon>
        {!editMode ? <ListItemText
            classes={{primary: classes.listItemText}}
            primary={activeTechnic[property] ||
            <Button variant="contained" color="secondary"
                    onClick={() => {
                        editPropertyTechnic(activeTechnic, property)
                    }}>Заполнить</Button>}
            secondary={text}
        /> : <AutocompleteTextarea activeTechnic={activeTechnic} property={property} text={text} setEditMode={setEditMode}/>}

    </ListItem>
}
export default ListItemForm


