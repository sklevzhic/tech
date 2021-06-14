import {connect} from "react-redux";
import {getTechnicForTypes, getTypes} from "../../redux/Tech-reducer";
import TechicsPage from "./TechicsPage";


const mapStateToProps = (state) => {
    return {
        technics: state.techs.technics,
        types: state.techs.types
    }
}
const mapToDispatch = {
    getTypes,
    getTechnicForTypes
}

export default connect(mapStateToProps, mapToDispatch)(TechicsPage)
