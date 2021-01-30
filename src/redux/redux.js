// import ProfileReducer from "./Profile-reducer";
// import DialogsReducer from "./Dialogs-reducer";
//
//
// const ADD_NEW_POST = 'ADD-NEW-POST';
// const CHANGE_NEW_POST = 'CHANGE-NEW-POST';
// const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
// const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';
//
//
// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 0, dislikeCount: 0},
//                 {id: 2, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 152, dislikeCount: 0},
//                 {id: 3, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 0, dislikeCount: 12},
//                 {id: 4, text: "Lorem", imgPost: "https://materializecss.com/images/sample-1.jpg", likecount: 12, dislikeCount: 0},
//                 {id: 1, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 0, dislikeCount: 0},
//                 {id: 2, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 152, dislikeCount: 0},
//                 {id: 3, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 0, dislikeCount: 12},
//                 {id: 4, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 12, dislikeCount: 0},
//                 {id: 1, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 0, dislikeCount: 0},
//                 {id: 2, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 152, dislikeCount: 0},
//                 {id: 3, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 0, dislikeCount: 12},
//                 {id: 4, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 12, dislikeCount: 0},
//             ],
//             newPostText: "",
//         },
//         dialogsPage: {
//             dialogs: [
//                 { name: "Alexander", id: 1},
//                 { name: "Alexander1", id: 2},
//                 { name: "Alexander2", id: 3},
//                 { name: "Alexander3", id: 4},
//                 { name: "Alexander5", id: 5},
//                 { name: "Alexander6", id: 6},
//                 { name: "Alexander7", id: 7},
//                 { name: "Alexander8", id: 8},
//             ],
//             messages: [
//                 { msg: "1This is a square image. Add the  class to it to make it appear circular.", id: 1, imgsrc: "https://materializecss.com/images/yuna.jpg"},
//                 { msg: "2This is a square image. Add the  class to it to make it appear circular.", id: 2, imgsrc: "https://materializecss.com/images/yuna.jpg"},
//                 { msg: "3This is a square image. Add the  class to it to make it appear circular.", id: 3, imgsrc: "https://materializecss.com/images/yuna.jpg"},
//                 { msg: "it to make it appear circular.", id: 4, imgsrc: "https://materializecss.com/images/yuna.jpg"},
//                 { msg: "5This is a square image. Add the  class to it to make it appear circular.", id: 5, imgsrc: "https://materializecss.com/images/yuna.jpg"},
//                 { msg: "This is a square image. Add the  class to it to make it appear circular.", id: 6, imgsrc: "https://materializecss.com/images/yuna.jpg"},
//             ],
//             newMessageText: 'Loh'
//         },
//     },
//     getState() {
//         return this._state
//     },
//     reRender() {
//         console.log('aaa')
//     },
//     subscribe(observer) {
//         store.reRender = observer;
//     },
//     dispatch(action) {
//         store._state.profilePage = ProfileReducer(store._state.profilePage, action)
//         store._state.dialogsPage = DialogsReducer(store._state.dialogsPage, action)
//         store.reRender(store._state)
//     }
// }
//
//
//
//
// window.store = store;
// export default store;