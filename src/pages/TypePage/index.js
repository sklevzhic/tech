import {connect} from "react-redux";
import TypePage from "./TypePage";
import {addUser, getActiveType, updateTechnic} from "../../redux/Tech-reducer";


const mapStateToProps = (state) => {
    return {
        activeType: state.techs.activeType,
        technics: state.techs.technics,
        yearsOfProduction: state.techs.yearsOfProduction,
        users: state.techs.users,
        matfyos: state.techs.matfyos,
        korpuses: state.techs.korpuses,
        subdivisions: state.techs.subdivisions,
        toogleLoadingInfoFotType: state.techs.toogleLoadingInfoFotType,
    }
}
const mapToDispatch = {
    getActiveType,
    updateTechnic,
    addUser
}

export default connect(mapStateToProps, mapToDispatch)(TypePage)
