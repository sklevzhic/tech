import ListTechnics from "./ListTechnics";
import {connect} from "react-redux";
import {getSchemaTechnics} from "../../redux/Tech-reducer";


const mapStateToProps = (state) => {
    return {
        tech: state.techs.technics,
        technicsByCategory: state.techs.technicsByCategory,
        toogleLoadingInfoFotType: state.techs.toogleLoadingInfoFotType,
        schema: state.techs.schema,
    }
}
const mapToDispatch = {
    getSchemaTechnics
}

export default connect(mapStateToProps, mapToDispatch)(ListTechnics)
