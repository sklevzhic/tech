import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from "./Header.css";
import {Avatar, Button, Menu, MenuItem} from "@material-ui/core";
import {Link} from "react-router-dom";


const Header = ({isAuth, logout, login, photo}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles()
    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6">
                        Недоинст
                    </Typography>
                    <div className={classes.grow}/>
                    {isAuth && <>
                        <Button component={Link} to={"/users"} variant="contained"> Users</Button>
                        {
                            photo
                                ?
                                <Button aria-controls="simple-menu" variant="contained" onClick={handleClick}>
                                    <Avatar
                                        src={photo.small || null}
                                    ></Avatar>
                                    {login}
                                </Button>

                                : <Button aria-controls="simple-menu" onClick={handleClick}>
                                </Button>
                        }
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem
                                component={Link}
                                to={"/profile"}
                                onClick={handleClose}
                            >Profile</MenuItem>
                            <MenuItem onClick={logout}>Logout</MenuItem>
                        </Menu>
                    </>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header
