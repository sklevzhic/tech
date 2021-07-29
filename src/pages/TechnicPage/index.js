import {connect} from "react-redux";
import TechnicPage from "./TechnicPage";
import {getTechnicInfo} from "../../redux/Tech-reducer";

const mapStateToProps = (state) => {
    return {
        activeTechnic: state.techs.activeTechnic,
        types: state.techs.types,
        users: state.techs.users
    }
}
const mapToDispatch = {
    getTechnicInfo
}

export default connect(mapStateToProps, mapToDispatch)(TechnicPage)
