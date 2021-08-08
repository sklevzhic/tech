import ListTechnics from "./ListTechnics";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        technicsByCategory: state.techs.technicsByCategory,
        toogleLoadingInfoFotType: state.techs.toogleLoadingInfoFotType,
    }
}
const mapToDispatch = {
}

export default connect(mapStateToProps, mapToDispatch)(ListTechnics)
