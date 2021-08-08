import {connect} from "react-redux";
import MiniCardTechnic from "./MiniCardTechnic";
import {getTypes} from "../../redux/Tech-reducer";


const mapStateToProps = (state) => {
    return {
        keys: state.techs.keys,
        types: state.techs.types
    }
}
const mapToDispatch = {
    getTypes
}

export default connect(mapStateToProps, mapToDispatch)(MiniCardTechnic)
