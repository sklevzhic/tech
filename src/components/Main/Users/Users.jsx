import Preloader from "../../Common/Preloader";
import {NavLink} from "react-router-dom";
import s from './Users.module.css'

const Users = (props) => {
    let usersElements = props.users.map(u => {
        return <li key={u.id} className="collection-item avatar">
            <NavLink to={`/profile/${u.id}`} >
                <img src={
                    ((u.photos.large === null) || (u.photos.small === null))
                        ? "https://www.needava.com/wp-content/uploads/2015/08/profile-175-50x50-300x300.jpg"
                        : u.photos.small

                } className="circle" alt={`${u.login}`}/>
            </NavLink>
                    <span className="title">{`${u.name}`}</span>
                    {
                        u.followed
                            ? <button
                                disabled={props.followingInProgress.some(id => id === u.id)}
                                className="waves-effect waves-light btn right"
                                onClick={() => props.unfollow(u.id)}
                            >Отписаться</button>
                            : <button
                                disabled={props.followingInProgress.some(id => id === u.id)}
                                className="waves-effect waves-light btn right"
                                onClick={() => props.follow(u.id)}
                            >Подписаться</button>
                    }
                </li>


    })

    let countPages = Math.ceil(props.totalUsers / props.rowsPerPage);
    let pages = [];
    for (let i=1; i<=countPages; i++) {
        pages.push(i)
    }
    let paginationElements = pages.map(el => {
        return <li
            key={el}
            className={ props.currentPage === el ? 'active' : 'waves-effect'}
            onClick={() => props.onSelectPage(el)}
        >
            <a href="#!">{el}</a>
        </li>
    })

    return  (
        <div>
             { props.isFetching ? <Preloader /> : null }
            <ul className={"pagination " + s.pagination1} >
                {paginationElements}
            </ul>

            <ul className="collection">
                {usersElements}
            </ul>
        </div>
    )
}

export default Users;