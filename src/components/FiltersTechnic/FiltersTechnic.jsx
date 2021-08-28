import React, {useEffect} from 'react';
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


const FiltersTechnics = ({getStatistic, technics, paramsTechnics, statistics, categories, handlerCategory}) => {
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
                    return <Tab key={i} label={el.title} {...a11yProps(i)} />
                })}

            </Tabs>

            {paramsTechnics.map((el, i) => {
                return <TabPanel
                    className={classes.tabPanel}
                    value={value} index={i}>
                    <List key={i} className={classes.statisticItems}>
                        {
                            statistics.map((obj,i) => {
                                let prop = getProperty(obj)
                                let abbreviation = obj.[val]
                                if (val === 'faculty') {
                                    abbreviation = obj.[val]
                                }
                                const isContains = () => {
                                    let a = categories.some(el => {
                                        if (obj[prop] === el[prop]) {
                                            return true
                                        } else {
                                            return false
                                        }
                                    })
                                    return a
                                }
                                return <ListItem key={i} onClick={() => handlerCategory(val, (obj.[val]))} button
                                                 className={isContains() ? classes.active : null}>
                                    <Icon type={val}/>
                                    <ListItemText
                                        primary={`${abbreviation || 'Не указано'} - ${obj.properties.length} шт`}/>
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