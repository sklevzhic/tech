import Users from "./Users";
import {follow, getUsers, unfollow} from "../../redux/Users-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        rowsPerPage: state.usersPage.rowsPerPage,
        currentPage: state.usersPage.currentPage,
        totalPages: Math.ceil(state.usersPage.totalUsers / state.usersPage.rowsPerPage),
        isFetching: state.usersPage.isFetching,
        totalUsers: state.usersPage.totalUsers
    }
}

const mapToDispatch = {
    getUsers,
    follow,
    unfollow
}

export default connect(mapStateToProps,mapToDispatch)(Users)