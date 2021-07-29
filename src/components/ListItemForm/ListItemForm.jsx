import {ListItem, ListItemIcon, ListItemText, TextField} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import React, {useState} from "react";
import icons from "../global/global";
import {makeStyles} from "@material-ui/core/styles";
import {useForm} from 'react-hook-form';
import Autocomplete, {createFilterOptions} from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
    listItemText: {
        fontSize: '1.1em',
        fontWeight: "bold"
    }
}))
const filter = createFilterOptions();

const ListItemForm = ({activeTechnic, property, text, updateTechnic, array}) => {
    const classes = useStyles();
    const editPropertyTechnic = () => {
        setEditMode(true)
    }
    const getIcon = (val, size) => {
        let Icon = icons[val]
        return <Icon style={{fontSize: `${size}px`}}/>
    }
    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = React.useState(null);
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(onSubmit)();
            setEditMode(false)
        }
    }
    const {
        register,
        handleSubmit,
        reset
    } = useForm();
    const onSubmit = (obj) => {
        console.log(value)
        // updateTechnic(activeTechnic.id, obj)
        // reset()
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
        /> : <form onSubmit={handleSubmit(onSubmit)}>

            {!array ?  <TextField onKeyDown={handleKeyDown} defaultValue={activeTechnic[property]} {...register(property)} />
                :             <Autocomplete
                    defaultValue={activeTechnic[property]}
                    onChange={(event, newValue) => {
                        if (typeof newValue === 'string') {
                            setValue({
                                [property]: newValue,
                            });
                        } else if (newValue && newValue.inputValue) {
                            // Create a new value from the user input
                            setValue({
                                [property]: newValue.inputValue,
                            });
                        } else {
                            setValue(newValue);
                        }
                    }}
                    filterOptions={(options, params) => {
                        const filtered = filter(options, params);

                        // Suggest the creation of a new value
                        if (params.inputValue !== '') {
                            filtered.push({
                                inputValue: params.inputValue,
                                [property]: `Add "${params.inputValue}"`,
                            });
                        }

                        return filtered;
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="free-solo-with-text-demo"
                    options={array}
                    getOptionLabel={(option) => {
                        // Value selected with enter, right from the input
                        if (typeof option === 'string') {
                            return option;
                        }
                        // Add "xxx" option created dynamically
                        if (option.inputValue) {
                            return option.inputValue;
                        }
                        // Regular option
                        return option[property];
                    }}
                    renderOption={(option) => option[property]}
                    style={{width: 300}}
                    freeSolo
                    renderInput={(params) => (
                        <TextField {...params} label="Free solo with text demo" variant="outlined"/>
                    )}
                />
            }


        </form>}

    </ListItem>
}
export default ListItemForm