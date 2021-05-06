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
import {Pagination, Skeleton} from "@material-ui/lab";
import {Link} from "react-router-dom";
import Preloader from "../../components/Preloader";

const useStyles = makeStyles((theme) => ({
    root: {
        // width: '100%',
    },
}));

const UsersPage = ({users, getUsers, follow, unfollow, rowsPerPage, currentPage, totalPages, isFetching}) => {
    useEffect(() => {
        (async () => {
            await getUsers(rowsPerPage, currentPage);
        })();
    }, [getUsers]);
    const [page, setPage] = useState(1)

    const selectPage = (event, page) => {
        setPage(page)
        getUsers(rowsPerPage, page)
    }

    const classes = useStyles();
    return (
        <>
            {!isFetching
                ? <Container>
                    <List dense className={classes.root}>
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
                    <Pagination count={totalPages} onChange={selectPage}/>
                </Container>
                : <Preloader />
            }

        </>
    )
}

export default UsersPage