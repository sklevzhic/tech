import EventsPage from './EventsPage'
import {connect} from "react-redux";
import {getPrintersAll} from "../../redux/Printers-reducer";

const mapStateToProps = (state) => {
    return {
        printers: state.printers.printers
    }
}
const mapToDispatch = {
    getPrintersAll,
}

export default connect(mapStateToProps, mapToDispatch)(EventsPage)