import React, {useEffect} from "react";
import {
    Avatar,
    Checkbox, Container,
    Button,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText
} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        // width: '100%',
    },
}));

const UsersPage = ({users, getUsersThunkCreator, follow, unfollow}) => {
    useEffect(() => {
        (async () => {
            await getUsersThunkCreator();
        })();
    }, [getUsersThunkCreator]);


    const classes = useStyles();
    return (
        <Container>
            <List dense className={classes.root}>
                {users.map((user) => {
                    const labelId = `checkbox-list-secondary-label-${user.id}`;
                    return (
                        <ListItem key={user.id} button>
                            <ListItemAvatar>
                                <Avatar
                                    alt={`Avatar n°${user.name}`}
                                    src={user.photos.small}
                                />
                            </ListItemAvatar>
                            <ListItemText id={labelId} primary={user.name}/>
                            <ListItemSecondaryAction>
                                {
                                    console.log(user)
                                    // follow(user.id)
                                    //     ? <Button onClick={() => follow(user.id)}>Follow</Button>
                                    //     :  <Button onClick={() => unfollow(user.id)}>Follow</Button>
                                }

                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
            </List>
        </Container>
    )
}

export default UsersPage