import {connect} from "react-redux";
import MiniCardTechnic from "./MiniCardTechnic";


const mapStateToProps = (state) => {
    return {
        keys: state.techs.keys,
    }
}
const mapToDispatch = {

}

export default connect(mapStateToProps, mapToDispatch)(MiniCardTechnic)
