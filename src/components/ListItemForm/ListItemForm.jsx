import {FormControlLabel, ListItem, ListItemIcon, ListItemText, Switch} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import icons from "../global/global";
import AutocompleteTextarea from "../AutocompleteTextarea";
import {makeStyles} from "@material-ui/core/styles";
import Icon from "../Icon";
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    listItemText: {
        fontSize: '.9em',
        fontWeight: "bold"
    }
}))

const ListItemForm = ({updateTechnic, activeTechnic, property, text}) => {

    const classes = useStyles();
    const [editMode, setEditMode] = useState(false)
    const [checked, setChecked] = React.useState('');
    useEffect(() => {
        setChecked(activeTechnic.print)
    }, [activeTechnic])
    const toggleChecked = () => {
        setChecked((prev) => !prev);
        updateTechnic(activeTechnic.id, {
            [property]: !checked
        })
    };

    const editPropertyTechnic = () => {
        setEditMode(true)
    }
    if (property === 'print') {
        return <FormControlLabel
            control={<Switch checked={checked} onChange={toggleChecked}/>}
            label={text}
        />
    } else {
        return <ListItem onDoubleClick={() => editPropertyTechnic(activeTechnic, property)}>
            <ListItemIcon>
                <Icon component={Link} to={"/test"} type={property}/>
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
}
export default ListItemForm


