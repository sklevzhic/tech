import StagesFueling from './StagesFueling'
import {connect} from "react-redux";
import {addRefillForPrinter, getCurrentRefills, updateCurrentRefills} from "../../redux/Printers-reducer";

const mapStateToProps = (state) => {
    return {
        currentRefills: state.printers.currentRefills,
    }
}
const mapToDispatch = {
    getCurrentRefills,
    addRefillForPrinter,
    updateCurrentRefills
}

export default connect(mapStateToProps, mapToDispatch)(StagesFueling)
