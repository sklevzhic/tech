import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import React, {useState} from "react";
import icons from "../global/global";
import AutocompleteTextarea from "../AutocompleteTextarea";
import {makeStyles} from "@material-ui/core/styles";
import Icon from "../Icon";


const useStyles = makeStyles((theme) => ({
    listItemText: {
        fontSize: '.9em',
        fontWeight: "bold"
    }
}))

const ListItemForm = ({activeTechnic, property, text}) => {

    const classes = useStyles();
    const [editMode, setEditMode] = useState(false)
    const editPropertyTechnic = () => {
        setEditMode(true)
    }

    return <ListItem onDoubleClick={() => editPropertyTechnic(activeTechnic, property)}>
        <ListItemIcon>
            <Icon type={property}/>
        </ListItemIcon>
        {!editMode ? <ListItemText
            classes={{primary: classes.listItemText}}
            primary={activeTechnic[property] ||
            <Button variant="contained" color="secondary"
                    onClick={() => {
                        editPropertyTechnic(activeTechnic, property)
                    }}>Заполнить</Button>}
            secondary={text}
        /> : <AutocompleteTextarea activeTechnic={activeTechnic} property={property} text={text}
                                   setEditMode={setEditMode}/>}

    </ListItem>
}
export default ListItemForm


