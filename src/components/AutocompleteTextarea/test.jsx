import {Input, TextField} from "@material-ui/core";
import Autocomplete, {createFilterOptions} from "@material-ui/lab/Autocomplete";
import React, {useEffect, useState} from "react";
import {Controller, useForm, useFormContext} from "react-hook-form";

const filter = createFilterOptions();

const AutocompleteTextarea = ({activeTechnic, property, updateTechnic, setEditMode, getUsers, getRooms, text}) => {
    const [array, setArray] = useState()
    const [value, setValue] = React.useState(null);


    useEffect(() => {
        if (property === 'fyo') {
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
            setEditMode(false)
            setArray([])
        }
    }
    const selectItem = (event, newValue) => {
        if (typeof newValue === 'string') {
            setValue({
                [property]: newValue,
            });
        } else if (newValue && newValue.inputValue) {
            setValue({
                [property]: newValue.inputValue,
            });
        } else {
            setValue(newValue);
            setEditMode(false)
        }
        handleSubmit(onSubmit)();
    }

    const {register, handleSubmit, control, reset} = useForm();
    const onSubmit = (obj) => {
        updateTechnic(activeTechnic.id, obj)
        reset()
    }

    return (<form onSubmit={handleSubmit(onSubmit)}>
        {!array ? <TextField onKeyDown={handleKeyDown} defaultValue={activeTechnic[property]} {...register(property)} />
            : <Controller
                control={control}
                name={property}
                defaultValue={"ddd"}
                render={({value, name}) => (
                    <>

                        <Autocomplete
                            onChange={selectItem}
                            onKeyDown={handleKeyDown}
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
                            clearOnBlur
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
                            style={{width: 300}}
                            freeSolo
                            renderInput={(params) => (
                                <TextField {...params} label={text} variant="outlined"/>
                            )}
                        />

                    </>
                )


                }/>

        }


    </form>)
}

export default AutocompleteTextarea