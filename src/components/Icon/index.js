import Icon from './Icon'
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        types: state.techs.types,
    }
}

export default connect(mapStateToProps)(Icon)