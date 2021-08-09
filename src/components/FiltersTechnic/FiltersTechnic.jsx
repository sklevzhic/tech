import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import Icon from "../Icon";

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
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

const FiltersTechnics = ({getStatistic, technics, statistics}) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        getStatistic(properties[value].property)
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
                {properties.map((el, i) => {
                    return <Tab label={el.title} {...a11yProps(i)} />
                })}

            </Tabs>

            {properties.map((el, i) => {
                return <TabPanel value={value} index={i}>
                    <List>

                        {
                            statistics.map(obj => {
                                let key = properties[value].property
                                return <ListItem button>
                                    <ListItemAvatar>
                                        <Icon type={key} />
                                    </ListItemAvatar>
                                    <ListItemText primary={`${obj.[key]} - ${obj.properties.length} шт`}/>
                                </ListItem>
                            })
                        }
                    </List>

                </TabPanel>
            })}

        </div>
    );
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

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


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export default FiltersTechnics