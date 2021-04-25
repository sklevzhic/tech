import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from "./Header.css";
import {Button, Icon} from "@material-ui/core";


const Header = () => {
    const classes = useStyles()
    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Material-UI
                    </Typography>
                    <div className={classes.grow}/>
                    <Button variant="contained" color="default" className={classes.button}
                            endIcon={<Icon>person</Icon>}>
                        Profile
                    </Button>
                    <Button variant="contained" color="default" className={classes.button} endIcon={<Icon>email</Icon>}>
                        Messages
                    </Button>
                    <Button variant="contained" color="default" className={classes.button}
                            endIcon={<Icon>people</Icon>}>
                        Users
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header
