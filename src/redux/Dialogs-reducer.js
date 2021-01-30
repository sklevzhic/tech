const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';

let initialState = {
    dialogs: [
        { name: "Alexander", id: 1},
        { name: "Alexander1", id: 2},
        { name: "Alexander2", id: 3},
        { name: "Alexander3", id: 4},
        { name: "Alexander5", id: 5},
        { name: "Alexander6", id: 6},
        { name: "Alexander7", id: 7},
        { name: "Alexander8", id: 8},
    ],
    messages: [
        { msg: "1This is a square image. Add the  class to it to make it appear circular.", id: 1, imgsrc: "https://materializecss.com/images/yuna.jpg"},
        { msg: "2This is a square image. Add the  class to it to make it appear circular.", id: 2, imgsrc: "https://materializecss.com/images/yuna.jpg"},
        { msg: "3This is a square image. Add the  class to it to make it appear circular.", id: 3, imgsrc: "https://materializecss.com/images/yuna.jpg"},
        { msg: "it to make it appear circular.", id: 4, imgsrc: "https://materializecss.com/images/yuna.jpg"},
        { msg: "5This is a square image. Add the  class to it to make it appear circular.", id: 5, imgsrc: "https://materializecss.com/images/yuna.jpg"},
        { msg: "This is a square image. Add the  class to it to make it appear circular.", id: 6, imgsrc: "https://materializecss.com/images/yuna.jpg"},
    ],
    newMessageText: 'Loh'

};

const DialogsReducer = (state = initialState, action) => {
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

export const addNewMessageActionCreator = () => {
    return { type: ADD_NEW_MESSAGE }
}
export const updateMessageActionCreator = (text) => {
    return {type: CHANGE_NEW_MESSAGE, newText: text }
}

export default DialogsReducer