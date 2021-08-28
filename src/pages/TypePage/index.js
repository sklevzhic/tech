import {connect} from "react-redux";
import TypePage from "./TypePage";
import {getTechnics, addTechnic} from "../../redux/Tech-reducer";


const mapStateToProps = (state) => {
    return {
        activeType: state.techs.activeType,
        tech: state.techs.technics,
    }
}
const mapToDispatch = {
    getTechnics,
    addTechnic
}

export default connect(mapStateToProps, mapToDispatch)(TypePage)
