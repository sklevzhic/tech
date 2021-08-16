import DialogsReducer from "./Dialogs-reducer";
import ProfileReducer from "./Profile-reducer";
import UsersReducer from "./Users-reducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import AuthReducer from "./Auth-reducer";
import thunkMiddleware from "redux-thunk";
import AppReducer from "./App-reducer";
import TechReducer from "./Tech-reducer";
import PrintersReducer from "./Printers-reducer";

let redusers = combineReducers({
    dialogsPage: DialogsReducer,
    profilePage: ProfileReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    app: AppReducer,
    techs: TechReducer,
    printers: PrintersReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddleware)))


export default store;