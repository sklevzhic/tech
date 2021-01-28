const ADD_NEW_POST = 'ADD-NEW-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 0, dislikeCount: 0},
                {id: 2, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 152, dislikeCount: 0},
                {id: 3, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 0, dislikeCount: 12},
                {id: 4, text: "Lorem", imgPost: "https://materializecss.com/images/sample-1.jpg", likecount: 12, dislikeCount: 0},
                {id: 1, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 0, dislikeCount: 0},
                {id: 2, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 152, dislikeCount: 0},
                {id: 3, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 0, dislikeCount: 12},
                {id: 4, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 12, dislikeCount: 0},
                {id: 1, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 0, dislikeCount: 0},
                {id: 2, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 152, dislikeCount: 0},
                {id: 3, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 0, dislikeCount: 12},
                {id: 4, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 12, dislikeCount: 0},
            ],
            newPostText: "",
        },
        dialogsPage: {
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
        },
    },
    getState() {
        return this._state
    },
    reRender() {
        console.log('aaa')
    },
    subscribe(observer) {
        store.reRender = observer;
    },
    dispatch(action) {
        if (action.type === ADD_NEW_POST) {
            let newPost = {
                text: store._state.profilePage.newPostText,
                id: 158,
                likecount: 0,
                dislikeCount: 0,
                imgPost: "https://materializecss.com/images/sample-1.jpg"
            }

            store._state.profilePage.posts.unshift(newPost);
        }
        else if (action.type === CHANGE_NEW_POST) {
            store._state.profilePage.newPostText = action.newText;
        }
        else if (action.type === ADD_NEW_MESSAGE) {
            let newMessage = {
                msg: store._state.dialogsPage.newMessageText,
                id: Date.now()
            }

            store._state.dialogsPage.messages.unshift(newMessage);
            store._state.dialogsPage.newMessageText = '';
        }
        else if (action.type === CHANGE_NEW_MESSAGE) {
            store.getState().dialogsPage.newMessageText = action.newText;
        }
        store.reRender(store._state)
    }
}

export const addPostActionCreator = () => {
    return {type: ADD_NEW_POST}
}
export const updatePostActionCreator = (text) => {
    return {type: CHANGE_NEW_POST, newText: text }
}
export const addNewMessageActionCreator = () => {
    return { type: ADD_NEW_MESSAGE }
}
export const updateMessageActionCreator = (text) => {
    return {type: CHANGE_NEW_MESSAGE, newText: text }
}

window.store = store;
export default store;