import Technics from "./Technics";
import {connect} from "react-redux";
import {getTechnicForTypes} from "../../redux/Tech-reducer";

const mapStateToProps = (state) => {
    return {
        technics: state.techs.technics,
    }
}

const mapToDispatch = {
    getTechnicForTypes
}

export default connect(mapStateToProps,mapToDispatch)(Technics)