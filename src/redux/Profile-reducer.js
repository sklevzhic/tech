import {profileAPI} from "../api/api";

const ADD_NEW_POST = 'ADD-NEW-POST';
const DELETE_POST = 'DELETE_POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';
const SET_USER = 'SET_USER';
const UPDATE_STATUS = 'UPDATE_STATUS';
const UPDATE_PHOTO = 'UPDATE_PHOTO';
const LOADING_PROFILE_SWITCH = 'LOADING_PROFILE_SWITCH'
const TOGGLE_PRELOADER = ''

let initialState = {
    posts: [
        {
            "_id": "60ba82c71513ef3063a7dbe2",
            "picture": "https://picsum.photos/200/300",
            "text": "Consectetur exercitation quis quis mollit laboris ullamco commodo excepteur deserunt culpa dolor. Id labore nisi commodo id tempor laborum ipsum aliqua. Occaecat veniam ea deserunt pariatur.\r\n",
            "name": "Sofia Maxwell",
            "email": "sofiamaxwell@sunclipse.com"
        },
        {
            "_id": "60ba82c7036a1408194ed259",
            "picture": "https://picsum.photos/200/300",
            "text": "Exercitation quis Lorem qui dolore laboris in Lorem minim qui. Mollit est adipisicing dolor esse nostrud adipisicing nisi anim occaecat Lorem eiusmod eiusmod incididunt. Amet pariatur amet consectetur id consequat elit consequat anim ipsum id labore anim ullamco voluptate. Culpa commodo duis culpa anim. Occaecat deserunt amet occaecat officia magna in qui consectetur aute excepteur. Ut ut minim aliquip eu aliquip voluptate sint nostrud eiusmod.\r\n",
            "name": "Juanita Castro",
            "email": "juanitacastro@sunclipse.com"
        },
        {
            "_id": "60ba82c7cfcbb2e4ff1ca6c7",
            "picture": "https://picsum.photos/200/300",
            "text": "Occaecat exercitation veniam ad incididunt eu Lorem exercitation proident non. Tempor reprehenderit aute consequat Lorem anim sunt. Sunt aliquip occaecat consectetur adipisicing ut fugiat pariatur ipsum nisi non est proident. Esse mollit est ea pariatur ipsum ipsum duis consequat sunt laborum laborum eu quis voluptate. Elit labore laborum tempor culpa. Non excepteur duis et aliquip culpa nisi nulla ex eu exercitation dolor eiusmod eiusmod duis. Reprehenderit id Lorem ut veniam aliquip adipisicing fugiat.\r\n",
            "name": "Kate Moran",
            "email": "katemoran@sunclipse.com"
        },
        {
            "_id": "60ba82c7ced74ec52c6ad981",
            "picture": "https://picsum.photos/200/300",
            "text": "Ullamco enim in ut elit consequat adipisicing ad laborum occaecat elit. Irure aute esse in proident Lorem amet magna eu. Ex aute sit laboris velit id qui. Laborum ea in ipsum in culpa incididunt.\r\n",
            "name": "Byrd Mays",
            "email": "byrdmays@sunclipse.com"
        },
        {
            "_id": "60ba82c760cfe34dc31f2999",
            "picture": "https://picsum.photos/200/300",
            "text": "Culpa elit eiusmod sunt anim velit velit aliquip elit duis velit qui adipisicing consequat. Exercitation mollit cupidatat proident exercitation nisi. Anim proident incididunt consectetur Lorem nulla nulla laboris nostrud.\r\n",
            "name": "Logan Dodson",
            "email": "logandodson@sunclipse.com"
        },
        {
            "_id": "60ba82c78e3ddba6d8d56fa8",
            "picture": "https://picsum.photos/200/300",
            "text": "Ex commodo ex do duis excepteur qui dolore labore est cupidatat et ex consectetur. Veniam commodo consectetur aute culpa ullamco est mollit consequat anim. In anim velit duis ullamco nulla quis et quis cupidatat reprehenderit enim.\r\n",
            "name": "Leanna Gallagher",
            "email": "leannagallagher@sunclipse.com"
        },
        {
            "_id": "60ba82c7938ea62c849478a8",
            "picture": "https://picsum.photos/200/300",
            "text": "Minim laborum voluptate consectetur mollit qui aliquip reprehenderit. Deserunt sint qui cupidatat ad velit veniam. Fugiat veniam cillum id fugiat adipisicing voluptate officia esse exercitation.\r\n",
            "name": "Eileen Walker",
            "email": "eileenwalker@sunclipse.com"
        }
    ],
    user: "",
    isUpdateProfile: false,
    isFetching: false
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

export const togglePreloader = (isFetching) => {
    return {type: TOGGLE_PRELOADER, isFetching}
}

export const getUserInfo = (userId) => async (dispatch) => {
    dispatch(togglePreloader(true))
    let responceUserInfo = await profileAPI.getUserInfo(userId);
    let responceUserStatus = await profileAPI.getStatus(userId);
        dispatch(setUser(responceUserInfo, responceUserStatus.data))
    dispatch(togglePreloader(false))

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