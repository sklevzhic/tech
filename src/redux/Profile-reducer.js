// import {profileAPI} from "../api/api";

// const ADD_NEW_POST = 'ADD-NEW-POST';

let initialState = {
    user: {
        "name": "Александр Клевжиц",
        "phone": "+375297559056",
        "email": "sklevzhic@gmail.com",
        "aboutMe": "The purpose of training: obtaining practical experience in front-end development on real-world tasks. Lack or gaps in knowledge compensate for the desire to study the necessary technologies. I strive to constantly develop my professional and personal qualities.",
        "workExperience": [
            {
                "company": "Институт повышения квалификации и переподготовки БГПУ им М.Танка",
                "startWork": 2016
            },
            {
                "company": "Институт повышения квалификации и переподготовки БГПУ им М.Танка",
                "startWork": 2016
            }
        ],
        "education": [
            {
                "company": "Институт повышения квалификации и переподготовки БГПУ им М.Танка",
                "startWork": 2016
            },
            {
                "company": "Институт повышения квалификации и переподготовки БГПУ им М.Танка",
                "startWork": 2016
            }
        ],
        "socialLinks": [
            {"vk": "https://vk.com"},
            {"facebook": "https://facebook.com"},
            {"instagram": "https://instagram.com"}
        ]

    },
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        // case SET_USER: {
        //     return {
        //         ...state,
        //         user: {...action.user, status: action.status},
        //     }
        // }
        default:
            return state
    }

}
//
// export const addPostActionCreator = (newPostText) => {
//     return {type: ADD_NEW_POST, newPostText}
// };
//
//
// export const updateStatus = (status) => async (dispatch) => {
//     let response = await profileAPI.updateStatus({status: status})
//     if (response.data.resultCode === 0) {
//         dispatch(setStatus(status))
//     }
// }

export default ProfileReducer