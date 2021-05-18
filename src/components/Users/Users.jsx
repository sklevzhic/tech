import {Avatar, Button, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import {Link} from "react-router-dom";
import {Pagination} from "@material-ui/lab";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        // width: '100%',
    },
}));

const Users = ({users, follow, getUsers, rowsPerPage, unfollow, totalPages, totalUsers}) => {
    const classes = useStyles();

    const [page, setPage] = useState(1)
    const selectPage = (event, page) => {
        setPage(page)
        getUsers(rowsPerPage, page, false)
    }

    return (
        <>
            <List dense className={classes.root}>
                <Typography variant="body2">Всего пользователей: {totalUsers} </Typography>
                {users.map((user) => {
                    const labelId = `checkbox-list-secondary-label-${user.id}`;
                    return (
                        <ListItem component={Link} to={`profile/${user.id}`} key={user.id} button>
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
                                        ? <Button variant="outlined"
                                                  onClick={() => unfollow(user.id)}>Unollow</Button>
                                        : <Button variant="outlined"
                                                  onClick={() => follow(user.id)}>Follow</Button>
                                }
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
            </List>
            <Pagination count={totalPages} page={page} color="primary" onChange={selectPage}/>
        </>
    )
}
export default Users