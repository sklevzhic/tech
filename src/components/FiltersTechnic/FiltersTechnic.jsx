import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {List, ListItem, ListItemText} from "@material-ui/core";
import Icon from "../Icon";
import getProperty from "../global/getProperty";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
    },
    tabs: {
        width: "30%",
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    statisticItems: {
        height: "180px",
        overflow: "auto"
    },
    tabPanel: {
        width: "70%",
    },
    active: {
        background: "red"
    }
}));


const FiltersTechnics = ({getStatistic, technics, paramsTechnics, statistics, categories, setCategories}) => {
    const handleClickButton = (prop, value) => {
        const writeParams = (params) => {
            let arr = []
            params.forEach(el => {
               arr.push(el.property)
            })
            return arr
        }
        if (writeParams(paramsTechnics).includes(prop)) {
            setCategories(prevState => ({
                ...prevState,
                [prop]: (!prevState[prop].includes(value)) ? [...prevState[prop], value] : prevState[prop].filter(el => el !== value) // Добавление/удаление из активных категорий
            }))
        }


    } // добавление {годов выпуска, корпусов, фио сотруников} в url

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    let val = paramsTechnics[value].property
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        getStatistic(val)
    }, [value, technics])
    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                {paramsTechnics.map((el, i) => {
                    return <Tab label={el.title} {...a11yProps(i)} />
                })}

            </Tabs>

            {paramsTechnics.map((el, i) => {
                return <TabPanel
                    className={classes.tabPanel}
                    value={value} index={i}>
                    <List className={classes.statisticItems}>
                        {
                            statistics.map(obj => {
                                let prop = getProperty(obj)
                                const isContains = () => {
                                    if (categories[prop] !== undefined) {
                                        if (categories[prop].includes(obj[prop]) === true) {
                                            return true
                                        }
                                    } else {
                                        return false
                                    }
                                }
                                return <ListItem onClick={() => handleClickButton(val, obj.[val])} button
                                                 className={isContains() ? classes.active : null}>
                                    <Icon type={val}/>
                                    <ListItemText primary={`${obj.[val] || 'Не указано'} - ${obj.properties.length} шт`}/>
                                </ListItem>
                            })
                        }
                    </List>

                </TabPanel>
            })}

        </div>
    );
}

const a11yProps = (index) => {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}
const TabPanel = (props) => {
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
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export default FiltersTechnics