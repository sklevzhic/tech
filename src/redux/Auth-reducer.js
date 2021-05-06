import {authAPI, profileAPI} from "../api/api";

let SET_USER_DATA = 'SET_USER_DATA'
let GET_CAPTCH_URL = 'GET_CAPTCH_URL'
let BUTTON_ACTIVITY_SWITCH = 'BUTTON_ACTIVITY_SWITCH'

let initialState = {
    login: null,
    id: null,
    email: null,
    isAuth: false,
    captchaUrl: "",
    isButtonDisabled: false,
    photos: null,
    fullName: null
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                login: action.data.login,
                id: action.data.id,
                email: action.data.email,
                isAuth: action.data.isAuth,
                isButtonDisabled: false,
                photos: action.data.photos,
                fullName: action.data.fullName
            }
        }
        case GET_CAPTCH_URL: {
            return {
                ...state,
                captchaUrl: action.url
            }
        }
        case BUTTON_ACTIVITY_SWITCH: {
            return {
                ...state,
                isButtonDisabled: !state.isButtonDisabled
            }
        }
        default :
            return state
    }
}

export const setUserData = (data) => {
    return {type: SET_USER_DATA, data}
}
export const buttonActivitySwitch = () => {
    return {type: BUTTON_ACTIVITY_SWITCH}
}
export const getCaptchaURL = (url) => {
    return {type: GET_CAPTCH_URL, url}
}

export const getAuthUserData = () => async (dispatch) => {
    let responce = await authAPI.me();
    if (responce.resultCode === 0) {
        let responceMore = await profileAPI.getUserInfo(responce.data.id);

        let data = {
            login: responce.data.login,
            id: responce.data.id,
            email: responce.data.email,
            isAuth: true,
            fullName: responceMore.fullName,
            photos: responceMore.photos
        }
        dispatch(setUserData(data))
    }
}
export const getCaptchaUrl = () => async (dispatch) => {
    let responce = await authAPI.getCaptcha()
    dispatch(getCaptchaURL(responce))

}
export const logout = () => async (dispatch) => {
    let responce = await authAPI.logout()
    if (responce.resultCode === 0) {
        let data = {
            login: null,
            id: null,
            email: null,
            isAuth: false,
            fullName: null,
            photos: null
        }
        dispatch(setUserData(data))
    }
}
export const login = (data) => async (dispatch) => {
    buttonActivitySwitch()
    let responce = await authAPI.login(data.email, data.password, data.toggle, data.captcha)
    if (responce.resultCode === 0) {
        dispatch(buttonActivitySwitch())
        dispatch(getAuthUserData())
    } else if (responce.resultCode === 10) {
        dispatch(getCaptchaUrl())
    }
}

export default AuthReducer