import {connect} from "react-redux";
import Users from "./Users";
import {getTotalUsers, selectPage, getUsersThunkCreator, follow, unfollow} from "../../../redux/Users-reducer";
import React from "react";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getUsers} from "../../../redux/users-selectors";


class UsersWrapper extends React.Component {

    componentDidMount = () => {
        this.props.getUsersThunkCreator(this.props.rowsPerPage, this.props.currentPage)

    }
    onSelectPage = (page) => {
        this.props.selectPage(page -1)
        this.props.getUsersThunkCreator(this.props.rowsPerPage, page)
    }

    render() {
        return (
            <Users
                totalUsers={this.props.totalUsers}
                rowsPerPage={this.props.rowsPerPage}
                currentPage={this.props.currentPage}
                isFetching={this.props.isFetching}
                users={this.props.users}
                onSelectPage={ this.onSelectPage }
                follow= {this.props.follow}
                unfollow= {this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        rowsPerPage: state.usersPage.rowsPerPage,
        currentPage: state.usersPage.currentPage,
        totalUsers: state.usersPage.totalUsers,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}



export default compose(
    connect(mapStateToProps, {
        selectPage,
        getUsersThunkCreator,
        getTotalUsers,
        follow,
        unfollow,
    }),
    withAuthRedirect
)(UsersWrapper) ;