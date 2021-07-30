import {TextField} from "@material-ui/core";
import Autocomplete, {createFilterOptions} from "@material-ui/lab/Autocomplete";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

const filter = createFilterOptions();

const AutocompleteTextarea = ({activeTechnic, property, text, updateTechnic, setEditMode, getUsers, getRooms}) => {
    const [array, setArray] = useState([])
    useEffect(() => {
        if (property === 'fyo') {
            async function fetchUsers(){
                let response =  await getUsers()
                return response
            }
            fetchUsers().then(response => setArray(response))
        }
        if (property === 'room') {
            async function fetchRooms(){
                let response =  await getRooms()
                return response
            }
            fetchRooms().then(response => setArray(response))
        }
    }, [])
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(onSubmit)();
            setEditMode(false)
            setArray([])
        }
    }
    const [value, setValue] = React.useState(null);
    const {
        register,
        handleSubmit,
        reset
    } = useForm();
    const onSubmit = (obj) => {
        updateTechnic(activeTechnic.id, obj)
        reset()
    }
    const closeEditMode = (e) => {
        console.log(e.target)
    }

    return (<form onSubmit={handleSubmit(onSubmit)}>
        {!array ? <TextField onKeyDown={handleKeyDown} defaultValue={activeTechnic[property]} {...register(property)} />
            : <Autocomplete
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


    </form>)
}

export default AutocompleteTextarea