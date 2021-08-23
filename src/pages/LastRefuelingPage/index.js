import LastRefuelingPage from './LastRefuelingPage'
import {connect} from "react-redux";
import {getAllRefills} from "../../redux/Printers-reducer";

const mapStateToProps = (state) => {
    return {
        allRefills: state.printers.allRefills,
    }
}
const mapToDispatch = {
    getAllRefills,

}

export default connect(mapStateToProps, mapToDispatch)(LastRefuelingPage)