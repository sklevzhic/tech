import React, {useEffect, useState} from "react";

import {makeStyles} from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import {
    Avatar,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import images from "../global/images";
import groupElementsByDate from "../global/groupElementsByDate";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        height: 224,
    },
    tabs: {},
}));


const LastRefueling = ({printers, handlerRefills, allRefills, getAllRefills}) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [activeCategory, setActiveCategory] = useState('')
    const [refills, setRefills] = useState('')
    const handleChange = (event, newValue) => setValue(newValue);

    useEffect(() => {
        setActiveCategory(printers)
    }, [printers])

    useEffect(() => {
        getAllRefills()
    }, [])
    useEffect(() => {
        setRefills(allRefills)
    }, [allRefills])

    return (
            <h2>Список</h2>
    )
}

export default LastRefueling