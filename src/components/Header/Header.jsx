import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from "./Header.css";
import {Button, Icon} from "@material-ui/core";
import {Link} from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from "@material-ui/core/IconButton";


const Header = ({isAuth, logout}) => {
    const classes = useStyles()
    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6">
                        Типа Соцсеть
                    </Typography>
                    <div className={classes.grow}/>
                    { isAuth && <>
                    <Link to={"/profile"}>
                          <Button variant="contained" color="default"
                          endIcon={<Icon>person</Icon>}>
                        Profile
                          </Button>
                    </Link>


                        <IconButton
                            onClick={logout}
                            color="default"
                            aria-label="add an alarm"
                        >
                            <ExitToAppIcon />
                        </IconButton>
                    </>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header
