import {combineReducers, createStore} from "redux";
import DialogsReducer from "./Dialogs-reducer";
import ProfileReducer from "./Profile-reducer";

let redusers = combineReducers({
    dialogsPage: DialogsReducer,
    profilePage: ProfileReducer
})
let store = createStore(redusers);


export default store;