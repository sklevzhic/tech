import {connect} from "react-redux";
import TypePage from "./TypePage";
import {addUser, getActiveType, addTechnic} from "../../redux/Tech-reducer";


const mapStateToProps = (state) => {
    return {
        activeType: state.techs.activeType,
        technicsLength: state.techs.technics.length,
        toogleLoadingInfoFotType: state.techs.toogleLoadingInfoFotType,
    }
}
const mapToDispatch = {
    getActiveType,
    addTechnic
}

export default connect(mapStateToProps, mapToDispatch)(TypePage)
