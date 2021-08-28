import ListTechnics from "./ListTechnics";
import {connect} from "react-redux";
import {getSchemaTechnics} from "../../redux/Tech-reducer";


const mapStateToProps = (state) => {
    return {

        schema: state.techs.schema,
    }
}
const mapToDispatch = {
    getSchemaTechnics
}

export default connect(mapStateToProps, mapToDispatch)(ListTechnics)
