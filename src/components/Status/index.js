import Status from "./Status";
import {connect} from "react-redux";
import {updateStatus} from "../../redux/Profile-reducer";

const mapStateToProps = (state) => {
    return {
        statusGlobal: state.profilePage.user.status,
        id: state.auth.id
    }
}
export default connect(mapStateToProps, {updateStatus})(Status)