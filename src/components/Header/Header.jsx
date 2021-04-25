import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from "./Header.css";
import {Button, Icon} from "@material-ui/core";
import {Link} from "react-router-dom";


const Header = ({isAuth, logout}) => {
    const classes = useStyles()
    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Типа Соцсеть
                    </Typography>
                    <div className={classes.grow}/>
                    <div>

                    </div>
                    <Link to={"/profile"} variant="contained" color="default" className={classes.button}
                          endIcon={<Icon>person</Icon>}>
                        Profile
                    </Link>
                    <Button variant="contained" color="default" className={classes.button} endIcon={<Icon>email</Icon>}>
                        Messages
                    </Button>
                    <Button variant="contained" color="default" className={classes.button}
                            endIcon={<Icon>people</Icon>}>
                        Users
                    </Button>
                    {isAuth ? <Button
                            variant="contained"
                            color="default"
                            className={classes.button}
                            onClick={logout}
                            endIcon={<Icon>person</Icon>}>
                            Log out
                        </Button>
                        : null
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header
