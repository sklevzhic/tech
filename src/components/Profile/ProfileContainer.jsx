import Profile from "./Profile";
import React from "react";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {getStatus, getUserInfo, updateStatus} from "../../redux/Profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileWrapper extends React.Component {

    componentDidMount() {
        let uId = this.props.match.params.userId;
        if (!uId) {
            uId = this.props.id
        }
        this.props.getUserInfo(uId)
        this.props.getStatus(uId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let uId = this.props.match.params.userId;
        if (!uId) {
            uId = this.props.id
        }
        this.props.getUserInfo(uId)
        this.props.getStatus(uId)
    }


    render() {
        return (
            <div>
                <Profile user={this.props.user} posts={this.props.posts} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        user: state.profilePage.user,
        status: state.profilePage.status,
        id: state.auth.id
    }
}

export default compose(
    connect(mapStateToProps, {getUserInfo, getStatus, updateStatus}),
    // withAuthRedirect,
    withRouter
)(ProfileWrapper)