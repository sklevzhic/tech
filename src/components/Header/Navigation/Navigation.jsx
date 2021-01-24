import s from './Navigation.module.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
            <nav className={s.nav}>
                <ul>
                    <li>
                        <Link to="/">Index</Link>
                    </li>

                    <li>
                        <Link to="/todolist">Todo</Link>
                        </li>
                    <li><Link to="/dialogs">Dialogs</Link></li>
                    <li><Link to="/profile">Profile1</Link></li>
                </ul>
            </nav>
    )
}

export default Navigation