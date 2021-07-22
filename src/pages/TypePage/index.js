import {connect} from "react-redux";
import TypePage from "./TypePage";
import {addUser, getActiveType, getTechnicsForType, updateTechnic} from "../../redux/Tech-reducer";


const mapStateToProps = (state) => {
    return {
        activeType: state.techs.activeType,
        technics: state.techs.technics,
        yearsOfProduction: state.techs.yearsOfProduction,
        users: state.techs.users,
        subdivisions: state.techs.subdivisions}
}
const mapToDispatch = {
    getActiveType,
    updateTechnic,
    addUser
}

export default connect(mapStateToProps, mapToDispatch)(TypePage)
