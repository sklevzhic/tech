import AutocompleteTextarea from './AutocompleteTextarea'
import {getUsers, updateTechnic} from "../../redux/Tech-reducer";
import {connect} from "react-redux";
const mapStateToProps = (state) => {
    return {
        users: state.techs.users,
        rooms: state.techs.rooms,
    }
}
const mapToDispatch = {
    updateTechnic,
    getUsers
}
export default  connect(mapStateToProps, mapToDispatch)(AutocompleteTextarea)