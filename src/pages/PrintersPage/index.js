import {connect} from "react-redux";
import PrintersPage from "./PrintersPage";
import {getAllRefills, getCurrentRefills, getPrintersAll, sendOrder, updateCurrentRefills} from "../../redux/Printers-reducer";

const mapStateToProps = (state) => {
    return {
        allRefills: state.printers.allRefills,
        currentRefills: state.printers.currentRefills,
        printers: state.printers.printers
    }
}
const mapToDispatch = {
    getAllRefills,
    getCurrentRefills,
    getPrintersAll,
    sendOrder,
    updateCurrentRefills
}

export default connect(mapStateToProps, mapToDispatch)(PrintersPage)
