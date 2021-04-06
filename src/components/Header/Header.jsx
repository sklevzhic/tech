import s from './Header.module.css'
import Navigation from "./Navigation/Navigation";

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