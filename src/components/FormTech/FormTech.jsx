import React from 'react';
import TextField from '@material-ui/core/TextField';
import {useFormContext} from "react-hook-form";
import Autocomplete, {createFilterOptions} from '@material-ui/lab/Autocomplete';
import {addUser} from "../../redux/Tech-reducer";

const filter = createFilterOptions();

const FormTechItem = ({technicActive, property, label, items, addUser}) => {
    const [value, setValue] = React.useState(technicActive[property]);
    const {register} = useFormContext();
    return (
        <>
            {items ? <Autocomplete
                    defaultValue={value}
                    onChange={(event, newValue) => {
                        if (typeof newValue === 'string') {
                            setValue({
                                name: newValue,
                            });
                        } else if (newValue && newValue.inputValue) {
                            setValue({
                                name: newValue.inputValue,
                            });
                            addUser(newValue.inputValue)
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
                                name: `Add "${params.inputValue}"`,
                            });
                        }

                        return filtered;
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="free-solo-with-text-demo"
                    options={items}
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
                        return option.name;
                    }}
                    renderOption={(option) => option.name}
                    freeSolo
                    renderInput={(params) => (
                        <TextField {...params} label={label}
                                   fullWidth variant="outlined"/>
                    )}
                />
                : <input
                    type={(property === "year" ? "date" : '')}
                    label={(property === "year" ? '' : label)}
                    defaultValue={technicActive[property]}
                    variant="outlined"/>
            }
        </>
    );
}

export default FormTechItem