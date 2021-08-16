import {connect} from "react-redux";
import PrintersPage from "./PrintersPage";
import {getAllRefills, getCurrentRefills} from "../../redux/Printers-reducer";

const mapStateToProps = (state) => {
    return {
        allRefills: state.printers.allRefills,
        currentRefills: state.printers.currentRefills
    }
}
const mapToDispatch = {
    getAllRefills,
    getCurrentRefills
}

export default connect(mapStateToProps, mapToDispatch)(PrintersPage)
