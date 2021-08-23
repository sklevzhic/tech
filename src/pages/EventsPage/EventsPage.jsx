import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {Container} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));


const EventsPage = () => {
    const classes = useStyles();
    return (
        <Container>
            <div>

            </div>
            <List className={classes.root}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Клевжиц А.Ю. изменил инвентарный номер в принтере HP 1005"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    16.08.2021
                                </Typography>
                                {" — Клевжиц А.Ю."}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li"/>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Клевжиц А.Ю. изменил инвентарный номер в принтере HP 1005"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    16.08.2021
                                </Typography>
                                {" — Клевжиц А.Ю."}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li"/>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Клевжиц А.Ю. изменил инвентарный номер в принтере HP 1005"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    16.08.2021
                                </Typography>
                                {" — Клевжиц А.Ю."}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li"/>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Клевжиц А.Ю. изменил инвентарный номер в принтере HP 1005"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    16.08.2021
                                </Typography>
                                {" — Клевжиц А.Ю."}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </List>
        </Container>
    );
}

export default EventsPage