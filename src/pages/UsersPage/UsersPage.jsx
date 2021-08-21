import React, {useEffect} from "react";
import {Container, Paper, Tab, Tabs} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {Link, withRouter} from "react-router-dom";
import Users from "../../components/Users";

// const useStyles = makeStyles({
//     root: {
//         flexGrow: 1,
//     },
// });

const UsersPage = ({isFetching, rowsPerPage, currentPage, getUsers, match}) => {
    let sectionUrl = match.params.section
    const [value, setValue] = React.useState(0);
    useEffect(() => {
        if (sectionUrl === 'following') {
            setValue(1)
            getUsers(rowsPerPage, currentPage, true);
        }
        if (sectionUrl === 'allusers') {
            setValue(0)
            getUsers(rowsPerPage, currentPage, false);
        }
    }, [sectionUrl])
    // const classes = useStyles();
    const handleChange = (event, newValue) => {
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
                            <Tab label="All Users" component={Link} to="/users/allusers"/>
                            <Tab label="following" component={Link} to="/users/following"/>
                        </Tabs>
                    </Paper>
                    <Users/>
                </Container>
                : null
            }
        </>
    )
}

export default withRouter(UsersPage)