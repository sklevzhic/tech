import {authAPI} from "../api/api";

let SET_USER_DATA = 'SET_USER_DATA'
let GET_CAPTCH_URL = 'GET_CAPTCH_URL'
let initialState = {
    login: null,
    id: null,
    email: null,
    isAuth: false,
    captchaUrl: ""
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                login: action.login,
                id: action.id,
                email: action.email,
                isAuth: action.isAuth
            }
        }
        case GET_CAPTCH_URL: {
            return {
                ...state,
                captchaUrl: action.url
            }
        }
        default :
            return state
    }
}

export const setUserData = (login, id, email, isAuth) => {
    return {type: SET_USER_DATA, login, id, email, isAuth}
}

export const getCaptchaURL = (url) => {
    return {type: GET_CAPTCH_URL, url}
}
export const getAuthUserData = () => async (dispatch) => {
    let responce = await authAPI.me();
    if (responce.resultCode === 0) {
        dispatch(setUserData(responce.data.login, responce.data.id, responce.data.email, true))
    }
}

export const login = (data) => async (dispatch) => {
        let responce = await authAPI.login(data.email, data.password, data.toggle, data.captcha)
        if (responce.resultCode === 0) {
            dispatch(getAuthUserData())
        } else if (responce.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
}

export const getCaptchaUrl = () => async (dispatch) => {
    let responce = await authAPI.getCaptcha()
    dispatch(getCaptchaURL(responce))

}


export const logaut = (data) => async (dispatch) => {
    let responce = authAPI.logout()
    if (responce.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}

export default AuthReducer