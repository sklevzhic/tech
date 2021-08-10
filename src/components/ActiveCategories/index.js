import {connect} from "react-redux";
import ActiveCategories from "./ActiveCategories";


const mapStateToProps = (state) => {
    return {
        activeCategories: state.techs.activeCategories
    }
}
const mapToDispatch = {
}

export default connect(mapStateToProps, mapToDispatch)(ActiveCategories)
