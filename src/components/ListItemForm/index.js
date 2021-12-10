import ListItemForm from './ListItemForm'
import {updateTechnic} from "../../redux/Tech-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        db: state.profilePage
    }
}
const mapToDispatch = {
    updateTechnic
}
export default  connect(mapStateToProps, mapToDispatch)(ListItemForm)

