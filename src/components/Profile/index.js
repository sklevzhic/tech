import Profile from './Profile'
import {connect} from "react-redux";
import {getUserInfo, updateUserInfo} from "../../redux/Profile-reducer";

let mapStateToProps = (state) => {

    return {
        user: state.profilePage.user,
        id: state.auth.id,
        isUpdateProfile: state.profilePage.isUpdateProfile
    }
}

export default connect(mapStateToProps, {getUserInfo, updateUserInfo})(Profile)