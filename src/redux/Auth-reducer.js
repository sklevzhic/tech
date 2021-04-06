import {authAPI} from "../api/api";

let SET_USER_DATA = 'SET_USER_DATA'
let initialState = {
    login: null,
    id: null,
    email: null,
    isAuth: false
}

const AuthReducer = ( state = initialState, action) => {
        switch (action.type) {
            case SET_USER_DATA: {
                return {
                    ...state,
                    login: action.login,
                    id: action.id,
                    email: action.email,
                    isAuth: true
                }
            }
            default :
                return state
        }
}

export const setUserData = (login, id, email) => {
    return {type: SET_USER_DATA, login, id, email}
}
export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then(responce => {
        if (responce.resultCode === 0) {
            dispatch(setUserData(responce.data.login, responce.data.id, responce.data.email))
        }
    })
}



export default AuthReducer