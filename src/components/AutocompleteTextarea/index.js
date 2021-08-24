import AutocompleteTextarea from './AutocompleteTextarea'
import {getDataAutocomplete, updateTechnic} from "../../redux/Tech-reducer";
import {connect} from "react-redux";
const mapStateToProps = (state) => {
    return {
        users: state.techs.users,
        autocompleteData: state.techs.autocompleteData
    }
}
const mapToDispatch = {
    updateTechnic,
    getDataAutocomplete
}
export default  connect(mapStateToProps, mapToDispatch)(AutocompleteTextarea)