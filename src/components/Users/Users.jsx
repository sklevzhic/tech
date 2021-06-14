import {Avatar, Button, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import {Link} from "react-router-dom";
import {Pagination} from "@material-ui/lab";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
    root: {
        // width: '100%',
    },
}));

const Users = (props) => {
    const {users, follow, getUsers, rowsPerPage, unfollow, totalPages, totalUsers} = props;
    const classes = useStyles();
    const [pageNumber, setPageNumber] = useState(1)
    const selectPage = (event, page) => {
        setPageNumber(page)
        getUsers(rowsPerPage, pageNumber, false)
    }
    return (
        <>
            <List dense className={classes.root}>
                <Typography variant="body2">Всего пользователей: {totalUsers} </Typography>
                {users.map((user) => {
                    const labelId = `checkbox-list-secondary-label-${user.id}`;
                    return (
                        <ListItem component={Link} to={`/profile/${user.id}`} key={user.id} button>
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
            {/*<Pagination count={totalPages} page={page} color="primary" onChange={selectPage}/>*/}
            <Pagination count={totalPages} variant="outlined" shape="rounded" onChange={selectPage}  />
        </>
    )
}
export default Users

Users.propTypes = {

}