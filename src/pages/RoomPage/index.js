import {connect} from "react-redux";
import RoomPage from "./RoomPage";
import {getTechnicsByRoom} from "../../redux/Tech-reducer";

const mapStateToProps = (state) => {
    return {
        technicsByRoom: state.techs.technicsByRoom,
    }
}
const mapToDispatch = {
    getTechnicsByRoom
}

export default connect(mapStateToProps, mapToDispatch)(RoomPage)
