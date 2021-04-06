import s from './Navigation.module.css'
import { Link } from 'react-router-dom'

const Navigation = ( props ) => {
    return (
            <nav className={s.nav}>
                <ul>
                    <li>
                        <Link to="/">Index</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                        </li>
                    <li><Link to="/dialogs">Dialogs</Link></li>
                    {
                        (!props.props.login)
                            ? <li><Link to={`/login`}>Login</Link></li>
                            : <li><Link to={`/profile/${props.props.id}` }>{props.props.login}</Link></li>

                    }
                </ul>
            </nav>
    )
}

export default Navigation