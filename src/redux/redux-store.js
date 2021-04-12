import DialogsReducer from "./Dialogs-reducer";
import ProfileReducer from "./Profile-reducer";
import UsersReducer from "./Users-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import AuthReducer from "./Auth-reducer";
import thunkMiddleware from "redux-thunk";
import AppReducer from "./App-reducer";

let redusers = combineReducers({
    dialogsPage: DialogsReducer,
    profilePage: ProfileReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    app: AppReducer
})
let store = createStore(redusers, applyMiddleware(thunkMiddleware));


export default store;