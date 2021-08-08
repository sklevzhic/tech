import {connect} from "react-redux";
import TechnicPage from "./TechnicPage";
import {addComment, getComments, getTechnicInfo} from "../../redux/Tech-reducer";

const mapStateToProps = (state) => {
    return {
        activeTechnic: state.techs.activeTechnic,
        types: state.techs.types,
        users: state.techs.users,
        activeTechnicComments: state.techs.activeTechnicComments
    }
}
const mapToDispatch = {
    getTechnicInfo,
    addComment,
    getComments
}

export default connect(mapStateToProps, mapToDispatch)(TechnicPage)
