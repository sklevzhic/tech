import ListItemForm from './ListItemForm'
import {updateTechnic} from "../../redux/Tech-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        users: state.techs.users
    }
}
const mapToDispatch = {
    updateTechnic
}
export default  connect(mapStateToProps, mapToDispatch)(ListItemForm)

