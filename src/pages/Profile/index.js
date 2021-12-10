import ProfilePage from "./ProfilePage";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        db: state.profilePage.db
    }
}

export default connect(mapStateToProps)(ProfilePage);