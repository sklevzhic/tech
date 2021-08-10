import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {List, ListItem, ListItemText} from "@material-ui/core";
import Icon from "../Icon";
import deepEqual from "../global/deepEqual";
import getProperty from "../global/getProperty";

let properties = [
    {
        "title": "Годы выпуска",
        "property": "year"
    }, {
        "title": "Факультеты",
        "property": "faculty"
    }, {
        "title": "Корпуса",
        "property": "build"
    }, {
        "title": "Кабинеты",
        "property": "room"
    }, {
        "title": "Сотрудники",
        "property": "user"
    }, {
        "title": "Материально-ответственные лица",
        "property": "matfyo"
    }
]
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


const FiltersTechnics = ({getStatistic, technics, statistics, categories}) => {
    const [filters, setFilters] = useState(() => [])
    const handleClickButton = (prop, value) => {
        let obj = {
            "type": prop,
            "value": value
        }
        console.log(obj)
        setFilters((oldObj) => {
            let isTrue = oldObj.some(el => {
                if (deepEqual(el, obj)) {
                    return true
                }
            })
            if (isTrue) {
                return oldObj.filter(el => {
                    return console.log('есть')
                })
            } else {
                return [...oldObj, obj]

            }


        })
    } // добавление {годов выпуска, корпусов, фио сотруников} в url

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    let val = properties[value].property
    if (val === 'user') {
        val = 'fyo'
    } else if (val === 'build') {
        val = 'korpus'
    } else if (val === 'faculty') {
        val = 'faculty'
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        getStatistic(val)
    }, [value, technics])
    console.log(categories)
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
                {properties.map((el, i) => {
                    return <Tab label={el.title} {...a11yProps(i)} />
                })}

            </Tabs>

            {properties.map((el, i) => {
                return <TabPanel
                    className={classes.tabPanel}
                    value={value} index={i}>
                    <List className={classes.statisticItems}>
                        {
                            statistics.map(obj => {
                                let prop = getProperty(obj)
                                const a = () => {
                                    if (categories[prop] !== undefined) {
                                        if (categories[prop].includes(obj[prop]) === true) {
                                            return true
                                        }
                                    }
                                }
                                return <ListItem button className={a() ? classes.active : null }>
                                    <Icon type={val}/>
                                    <ListItemText onClick={() => handleClickButton(val, obj.[val])}
                                                  primary={`${obj.[val]} - ${obj.properties.length} шт`}/>
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