import {profileAPI} from "../api/api";

const ADD_NEW_POST = 'ADD-NEW-POST';
const DELETE_POST = 'DELETE_POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';
const SET_USER = 'SET_USER';
const UPDATE_STATUS = 'UPDATE_STATUS';
const UPDATE_PHOTO = 'UPDATE_PHOTO';
const LOADING_PROFILE_SWITCH = 'LOADING_PROFILE_SWITCH'

let initialState = {
    posts: [
        {
            id: '0',
            imgPost: 'https://social-network.samuraijs.com/activecontent/images/users/16277/user.jpg?v=2',
            text: 'text',
        },
        {
            id: '1',
            imgPost: 'https://social-network.samuraijs.com/activecontent/images/users/16277/user.jpg?v=2',
            text: 'text',
        }
    ],
    user: "",
    isUpdateProfile: false
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST: {
            let newPost = {
                text: action.newPostText,
                imgPost: "https://social-network.samuraijs.com/activecontent/images/users/16277/user.jpg?v=2"
            }
            let copyState = {...state}
            copyState.posts = [...copyState.posts]
            copyState.posts.unshift(newPost);
            return copyState
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id)
            }
        }
        case CHANGE_NEW_POST: {
            let copyState = {...state}
            copyState.newPostText = action.newText;
            return copyState
        }
        case SET_USER: {
            return {
                ...state,
                user: {...action.user, status: action.status},
            }
        }
        case LOADING_PROFILE_SWITCH: {
            return {
                ...state,
                isUpdateProfile: !state.isUpdateProfile,
            }
        }
        case UPDATE_STATUS: {
            return {
                ...state,
                user: {...state.user, status: action.status}
            }
        }
        case UPDATE_PHOTO: {
            return {
                ...state,
                user: {...state.user, photos: action.photos}

            }
        }
        default:
            return state
    }

}

export const addPostActionCreator = (newPostText) => {
    return {type: ADD_NEW_POST, newPostText}
};
export const updatePostActionCreator = (text) => {
    return {type: CHANGE_NEW_POST, newText: text}
};
export const deletePost = (id) => {
    return {type: DELETE_POST, id}
};
export const setUser = (user, status) => {
    return {type: SET_USER, user, status}
}

export const lodingProfileSwitch = () => {
    return {type: LOADING_PROFILE_SWITCH}
}

export const uploadPhotoSuccess = (photos) => {
    return {type: UPDATE_PHOTO, photos}
}

export const setStatus = status => {
    return {type: UPDATE_STATUS, status}
}

export const getUserInfo = (userId) => async (dispatch) => {
    let responceUserInfo = await profileAPI.getUserInfo(userId);
    let responceUserStatus = await profileAPI.getStatus(userId);
        dispatch(setUser(responceUserInfo, responceUserStatus.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus({status: status})
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const updateUserInfo = (user) => async (dispatch, getState) => {
    dispatch(lodingProfileSwitch());
    let userId = getState().auth.id
    let responce = await profileAPI.updateUserInfo(user)
    dispatch(lodingProfileSwitch())
    if (responce.resultCode === 0) {
        dispatch(getUserInfo(userId))
    } else {
        debugger
    }

}
export const uploadPhoto = (photo) => async (dispatch) => {
    let responce = await profileAPI.uploadPhoto(photo)
    debugger

    if (responce.data.resultCode === 0) {
        dispatch(uploadPhotoSuccess(responce.data.data.photos))
    }
}

export default ProfileReducer