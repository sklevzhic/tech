import {connect} from "react-redux";
import {addType, deleteType, getTypes} from "../../redux/Tech-reducer";
import TypesTechnicsPage from "./TypesTechnicsPage";


const mapStateToProps = (state) => {
    return {
        types: state.techs.types
    }
}
const mapToDispatch = {
    getTypes,
    addType,
    deleteType
}

export default connect(mapStateToProps, mapToDispatch)(TypesTechnicsPage)
