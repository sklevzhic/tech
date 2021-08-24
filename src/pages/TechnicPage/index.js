import {connect} from "react-redux";
import TechnicPage from "./TechnicPage";
import {addComment, getComments, getTechnicInfo, deleteTechnic} from "../../redux/Tech-reducer";
import {getRefills} from "../../redux/Printers-reducer";

const mapStateToProps = (state) => {
    return {
        activeTechnic: state.techs.activeTechnic,
        types: state.techs.types,
        users: state.techs.users,
        activeTechnicComments: state.techs.activeTechnicComments,
        refills: state.printers.refills
    }
}
const mapToDispatch = {
    getTechnicInfo,
    addComment,
    getComments,
    getRefills,
    deleteTechnic
}

export default connect(mapStateToProps, mapToDispatch)(TechnicPage)
