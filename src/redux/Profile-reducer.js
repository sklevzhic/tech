import {profileAPI, usersAPI} from "../api/api";

const ADD_NEW_POST = 'ADD-NEW-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';
const SET_USER = 'SET_USER';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';

let initialState = {
    posts: [

    ],
    user: "",
    status: "",
    newPostText: "",
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST: {
            let newPost = {
                text: state.newPostText,
                id: Date.now().toString(),
                likecount: 0,
                dislikeCount: 0,
                imgPost: "https://shum.minsk.by/wp-content/uploads/2019/04/%D0%B1%D0%B0%D1%80weg.jpg"
            }
            let copyState = {...state}
            copyState.posts = [...copyState.posts]
            copyState.posts.unshift(newPost);
            return copyState
        }
        case CHANGE_NEW_POST: {
            let copyState = {...state}
            copyState.newPostText = action.newText;
            return copyState
        }
        case SET_USER: {
            return {
                ...state,
                user: action.user,
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        case UPDATE_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        default:
            return state
    }

}

export const addPostActionCreator = () => {
    return {type: ADD_NEW_POST}
};
export const updatePostActionCreator = (text) => {
    return {type: CHANGE_NEW_POST, newText: text }
};
export const setUser = (user) => {
    return {type: SET_USER, user}
}
export const setStatus = (status) => {
    return {type: SET_STATUS, status}
}

export const getUserInfo = (userId) => (dispatch) => {
    usersAPI.getUserInfo(userId)
        .then(responce => {
            dispatch(setUser(responce))
        })
    }
export const getStatus = (id) => (dispatch) => {
    profileAPI.getStatus(id)
        .then(responce => {
            if (responce.status === 200) {
                dispatch(setStatus(responce.data))
            }
        })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus({status: status})
        .then(responce => {
            if (responce.resultCode === 0) {
                dispatch(setStatus(responce.data.status))
            }
        })

}
export default ProfileReducer