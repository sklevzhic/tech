import Profile from './Profile'
import {connect} from "react-redux";
let mapStateToProps = (state) => {
    return {
        user: state.profilePage.user
    }
}

export default connect(mapStateToProps)(Profile)