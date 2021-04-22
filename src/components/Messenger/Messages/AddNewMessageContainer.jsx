import {addNewMessageActionCreator, updateMessageActionCreator} from "../../../redux/Dialogs-reducer";
import AddNewMessage from "./AddNewMessage";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => {
            dispatch(addNewMessageActionCreator())
        },
        onChangeNewMessage: (text) => {
            dispatch(updateMessageActionCreator(text))
        }
}
}

const AddNewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddNewMessage)

export default AddNewMessageContainer;