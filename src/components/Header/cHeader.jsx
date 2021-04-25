import s from './Header.module.css'
import Navigation from "./Navigation/Navigation";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import React from "react";

const Header = (props) => {
    return (
        <header className={s.header}>
            <a className={s.logo} href='/'>
                <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""/>
            </a>
            <div>
                <input type="text" placeholder="search"/>
            </div>
            <Navigation props={props}/>
        </header>
    )
}

export default Header

<AppBar
position="fixed"
className={clsx(classes.appBar, {
    [classes.appBarShift]: open,
})}
>
<Toolbar>
<IconButton
color="inherit"
aria-label="open drawer"
onClick={handleDrawerOpen}
edge="start"
className={clsx(classes.menuButton, {
    [classes.hide]: open,
})}
>
<MenuIcon />
</IconButton>
<Typography variant="h6" noWrap>
    Типа социальная сеть
</Typography>
</Toolbar>
</AppBar>