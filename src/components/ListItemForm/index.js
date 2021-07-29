import ListItemForm from './ListItemForm'
import {getUsers, updateTechnic} from "../../redux/Tech-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        users: state.techs.users
    }
}
const mapToDispatch = {
    updateTechnic,
    getUsers
}
export default  connect(mapStateToProps, mapToDispatch)(ListItemForm)

