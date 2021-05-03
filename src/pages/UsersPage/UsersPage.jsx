import React, {useEffect, useState} from "react";
import {
    Avatar,
    Container,
    Button,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText
} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {Pagination} from "@material-ui/lab";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        // width: '100%',
    },
}));

const UsersPage = ({users, getUsersThunkCreator, follow, unfollow, rowsPerPage, currentPage, totalPages}) => {
    useEffect(() => {
        (async () => {
            await getUsersThunkCreator(rowsPerPage, currentPage);
        })();
    }, [getUsersThunkCreator]);
    const [page, setPage] = useState(1)

    const selectPage = (event, page) => {
        setPage(page)
        getUsersThunkCreator(rowsPerPage, page)
    }

    const classes = useStyles();
    return (
        <Container>
            <List dense className={classes.root}>
                {users.map((user) => {
                    const labelId = `checkbox-list-secondary-label-${user.id}`;
                    return (
                        <ListItem component={Link} to={`profile/${user.id}`} key={user.id} button >
                            <ListItemAvatar>
                                <Avatar
                                    alt={`Avatar n°${user.name}`}
                                    src={user.photos.small}
                                />
                            </ListItemAvatar>
                            <ListItemText id={labelId} primary={user.name}/>
                            <ListItemSecondaryAction>
                                {
                                        user.followed
                                            ? <Button variant="outlined" onClick={() => unfollow(user.id)}>Unollow</Button>
                                            : <Button variant="outlined" onClick={() => follow(user.id)}>Follow</Button>
                                }
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
            </List>
            <Pagination count={totalPages} onChange={selectPage}/>
        </Container>
    )
}

export default UsersPage