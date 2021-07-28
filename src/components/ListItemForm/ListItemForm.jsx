import {ListItem, ListItemIcon, ListItemText, TextField} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import React, {useState} from "react";
import icons from "../global/global";
import {makeStyles} from "@material-ui/core/styles";
import {useForm} from "react-hook-form";

const useStyles = makeStyles((theme) => ({
    listItemText: {
        fontSize: '1.1em',
        fontWeight: "bold"
    }
}))
const ListItemForm = ({activeTechnic, property, text}) => {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const classes = useStyles();
    const editPropertyTechnic = (val) => {
        setEditMode(true)
    }
    const getIcon = (val, size) => {
        let Icon = icons[val]
        return <Icon style={{fontSize: `${size}px`}}/>
    }
    const [editMode, setEditMode] = useState(false)
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(onSubmit)();
            setEditMode(false)
        }
    }
    const onSubmit = (value) => {
        console.log(value, activeTechnic.id)
    }
    return <ListItem onDoubleClick={() => editPropertyTechnic(activeTechnic, property)}>
        <ListItemIcon>
            <Avatar>{getIcon(property)}</Avatar>
        </ListItemIcon>
        {!editMode ? <ListItemText
            classes={{primary: classes.listItemText}}
            primary={activeTechnic[property] ||
            <Button variant="contained" color="secondary"
                    onClick={() => editPropertyTechnic(activeTechnic, property)}>Заполнить</Button>}
            secondary={text}
        /> : <form onSubmit={handleSubmit(onSubmit)}>
            <TextField helperText="Для сохранения информации нажмите Enter" {...register(property)}
                       onKeyDown={handleKeyDown}
                       label={text} defaultValue={activeTechnic[property]}></TextField>
        </form>}

    </ListItem>
}
export default ListItemForm