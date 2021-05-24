import React, {useEffect, useState} from "react";
import {Button, Container, Paper, Tab, Tabs} from "@material-ui/core";
import Preloader from "../../components/Preloader";
import Typography from "@material-ui/core/Typography";
import {Link, withRouter} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";
import Users from "../../components/Users";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

const UsersPage = ({isFetching, rowsPerPage, currentPage, getUsers, match}) => {
    let sectionUrl = match.params.section
    useEffect(() => {
        if (sectionUrl === 'following') {
            getUsers(rowsPerPage, currentPage, true);
        }
        if (sectionUrl === 'allusers') {
            getUsers(rowsPerPage, currentPage, false);
        }
    }, [sectionUrl])
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        getUsers(rowsPerPage, currentPage, false);
        setValue(newValue);
    };

    return (
        <>
            {!isFetching
                ? <Container>
                    <Typography variant="body1" component="span">
                    </Typography>
                    <Paper square>
                        <Tabs
                            value={value}
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={handleChange}
                            aria-label="disabled tabs example"
                        >
                            <Tab label="All Users" disabled component={Link} to="/users/allusers"/>
                            <Tab label="following" component={Link} to="/users/following"/>
                        </Tabs>
                    </Paper>
                    <Users/>
                </Container>
                : <Preloader/>
            }
        </>
    )
}

export default withRouter(UsersPage)