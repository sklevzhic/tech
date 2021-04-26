import ProfileInfo from "./ProfileInfo"
import {connect} from "react-redux";
import {getUserInfo} from "../../redux/Profile-reducer";

let mapStateToProps = (state) => {

    return {
        user: state.profilePage.user,
        id: state.auth.id
    }
}

export default connect(mapStateToProps, {getUserInfo})(ProfileInfo)