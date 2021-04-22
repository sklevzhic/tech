import {connect} from "react-redux";
import MessagesList from "./MessagesList";

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const MessagesListContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesList)

export default MessagesListContainer;