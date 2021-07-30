import AutocompleteTextarea from './AutocompleteTextarea'
import {getRooms, getUsers, updateTechnic} from "../../redux/Tech-reducer";
import {connect} from "react-redux";
const mapStateToProps = (state) => {
    return {
        users: state.techs.users,
    }
}
const mapToDispatch = {
    updateTechnic,
    getUsers,
    getRooms
}
export default  connect(mapStateToProps, mapToDispatch)(AutocompleteTextarea)