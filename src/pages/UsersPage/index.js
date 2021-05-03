import UsersPage from "./UsersPage";
import {connect} from "react-redux";
import {follow, getUsersThunkCreator, unfollow} from "../../redux/Users-reducer";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        rowsPerPage: state.usersPage.rowsPerPage,
        currentPage: state.usersPage.currentPage,
        totalPages: Math.ceil(state.usersPage.totalUsers / state.usersPage.rowsPerPage)
    }
}

const mapToDispatch = {
    getUsersThunkCreator,
    follow,
    unfollow
}

export default connect(mapStateToProps, mapToDispatch)(UsersPage)
