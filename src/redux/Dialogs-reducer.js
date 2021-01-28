const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';

const DialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                msg: state.newMessageText,
                id: Date.now()
            }
            state.messages.unshift(newMessage);
            state.newMessageText = '';
            return state
        case CHANGE_NEW_MESSAGE:
            state.newMessageText = action.newText;
            return state
    }
return state
}

export default DialogsReducer