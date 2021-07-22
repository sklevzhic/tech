import ListTypes from "./ListTypes";
import {connect} from "react-redux";
import {addType, deleteType, getTypes} from "../../redux/Tech-reducer";
let mapStateToProps = (state) => {
    return {
        types: state.techs.types
    }
}

const mapToDispatch = {
    deleteType,
    getTypes,
    addType
}

export default connect(mapStateToProps, mapToDispatch)(ListTypes)