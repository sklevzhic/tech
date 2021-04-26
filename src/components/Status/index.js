import Status from "./Status";
import {connect} from "react-redux";
import {getStatus, updateStatus} from "../../redux/Profile-reducer";

const mapStateToProps = (state) => {
    return {
        statusGlobal: state.profilePage.status,
        id: state.auth.id
    }
}
export default connect(mapStateToProps, {updateStatus, getStatus})(Status)