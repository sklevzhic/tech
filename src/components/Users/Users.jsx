import Preloader from "../Common/Preloader";
import {NavLink} from "react-router-dom";
import Paginator from "../Paginator/Paginator";

const Users = ({
                   users,
                   followingInProgress,
                   follow,
                   totalUsers,
                   unfollow,
                   currentPage,
                   onSelectPage,
                   isFetching,
                   rowsPerPage
               }) => {
    let usersElements = users.map(u => {
        return <li key={u.id} className="collection-item avatar">
            <NavLink to={`/profile/${u.id}`}>
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
                        disabled={followingInProgress.some(id => id === u.id)}
                        className="waves-effect waves-light btn right"
                        onClick={() => unfollow(u.id)}
                    >Отписаться</button>
                    : <button
                        disabled={followingInProgress.some(id => id === u.id)}
                        className="waves-effect waves-light btn right"
                        onClick={() => follow(u.id)}
                    >Подписаться</button>
            }
        </li>


    })

    return (
        <div>
            {isFetching ? <Preloader/> : null}
            <Paginator
                totalUsers={totalUsers}
                rowsPerPage={rowsPerPage}
                currentPage={currentPage}
                onSelectPage={onSelectPage}
            />

            <ul className="collection">
                {usersElements}
            </ul>
        </div>
    )
}

export default Users;