import { IconButton, TextField} from "@material-ui/core";
import Autocomplete, {createFilterOptions} from "@material-ui/lab/Autocomplete";
import React, {useEffect, useState} from "react";
import {Controller, useForm, useFormContext} from "react-hook-form";
import {makeStyles} from "@material-ui/core/styles";
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    }
}))

const filter = createFilterOptions();

const AutocompleteTextarea = ({activeTechnic, property, updateTechnic, setEditMode, getUsers, getRooms, text}) => {

    const classes = useStyles()
    const [array, setArray] = useState("")
    const [value, setValue] = useState(null)

    useEffect(() => {
        if (property === 'fyo') {
            async function fetchUsers() {
                let response = await getUsers()
                return response
            }

            fetchUsers().then(response => setArray(response))
        }
        if (property === 'matfyo') {
            async function fetchUsers() {
                let response = await getUsers()
                return response
            }

            fetchUsers().then(response => setArray(response))
        }
        if (property === 'room') {
            async function fetchRooms() {
                let response = await getRooms()
                return response
            }

            fetchRooms().then(response => setArray(response))
        }
    }, [])
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(onSubmit)();
            setArray([])
        }
        if (e.key === 'Escape') {
            setEditMode(false)
        }

    }
    const selectItem = (event, newValue) => {
        if (typeof newValue === 'string') {
            setValue({
                [property]: newValue,
            });
        }
        else if (newValue && newValue.inputValue) {
            setValue({
                [property]: newValue.inputValue,
            });
        }
        else {
            setValue(newValue);
        }
    }
    const {register, handleSubmit, control, reset} = useForm();
    const onSubmit = (obj) => {
        if (obj[property] === undefined) {
            let val = {
                [property]: value[property]
            }
            updateTechnic(activeTechnic.id, val)
            setEditMode(false)
            reset()
        }
        else {
            updateTechnic(activeTechnic.id, obj)
            setEditMode(false)
            reset()
        }
    }

    return (<form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <div>
            {!array ?
                <TextField onKeyDown={handleKeyDown} defaultValue={activeTechnic[property]} autoFocus={true} {...register(property)} />
                : <Controller
                    name={property}
                    control={control}
                    render={({field}) => <Autocomplete
                        filterOptions={(options, params) => {
                            const filtered = filter(options, params);
                            if (params.inputValue !== '') {
                                filtered.push({
                                    inputValue: params.inputValue,
                                    [property]: `Add "${params.inputValue}"`,
                                });
                            }
                            return filtered;
                        }}
                        selectOnFocus
                        defaultValue={activeTechnic[property]}
                        clearOnBlur
                        onKeyDown={handleKeyDown}
                        onChange={selectItem}
                        handleHomeEndKeys
                        id="free-solo-with-text-demo"
                        options={array}
                        getOptionLabel={(option) => {
                            if (typeof option === 'string') {
                                return option;
                            }
                            if (option.inputValue) {
                                return option.inputValue;
                            }
                            return option[property];
                        }}
                        renderOption={(option) => option[property]}
                        style={{width: 250}}
                        freeSolo
                        renderInput={(field) => (
                            <TextField  autoFocus={true} {...field} label={text} variant="outlined"/>
                        )}
                    />}
                />

            }
        </div>
        <div>
            <IconButton
                color="primary" aria-label="upload picture" type="submit"
            >
                <SaveIcon/>
            </IconButton>
        </div>
    </form>)
}

export default AutocompleteTextarea