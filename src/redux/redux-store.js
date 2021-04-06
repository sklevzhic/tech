import DialogsReducer from "./Dialogs-reducer";
import ProfileReducer from "./Profile-reducer";
import UsersReducer from "./Users-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import AuthReducer from "./Auth-reducer";
import thunkMiddleware from "redux-thunk";

let redusers = combineReducers({
    dialogsPage: DialogsReducer,
    profilePage: ProfileReducer,
    usersPage: UsersReducer,
    auth: AuthReducer
})
let store = createStore(redusers, applyMiddleware(thunkMiddleware));


export default store;