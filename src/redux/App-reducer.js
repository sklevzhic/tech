import {authAPI} from "../api/api";
import {getAuthUserData} from "./Auth-reducer";

let INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'
let initialState = {
    initialized: false,
}

const AppReducer = ( state = initialState, action) => {
        switch (action.type) {
            case INITIALIZED_SUCCESS: {
                return {
                    ...state,
                    initialized: true
                }
            }
            default :
                return state
        }
}

export const initializedSuccess = () => {
    return {type: INITIALIZED_SUCCESS}
}
export const initialize = () => (dispatch) => {
    // let promise = dispatch(getAuthUserData())
    // Promise.all([promise])
    //     .then(()=> {
    //         dispatch(initialize())
    //     })
}


export default AppReducer