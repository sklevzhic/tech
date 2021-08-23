import {connect} from "react-redux";
import PrintersPage from "./PrintersPage";
import {getCurrentRefills, getPrintersAll, sendOrder, updateCurrentRefills, addRefillForPrinter} from "../../redux/Printers-reducer";

const mapStateToProps = (state) => {
    return {
        allRefills: state.printers.allRefills,
        currentRefills: state.printers.currentRefills,
        printers: state.printers.printers
    }
}
const mapToDispatch = {
    getCurrentRefills,
    getPrintersAll,
    sendOrder,
    updateCurrentRefills,
    addRefillForPrinter
}

export default connect(mapStateToProps, mapToDispatch)(PrintersPage)
