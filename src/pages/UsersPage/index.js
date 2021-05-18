import UsersPage from "./UsersPage";
import {connect} from "react-redux";
import {getUsers} from "../../redux/Users-reducer";


const mapStateToProps = (state) => {
    return {
        isFetching: state.usersPage.isFetching,
        rowsPerPage: state.usersPage.rowsPerPage,
        currentPage: state.usersPage.currentPage
    }
}
const mapToDispatch = {
    getUsers
}

export default connect(mapStateToProps, mapToDispatch)(UsersPage)
