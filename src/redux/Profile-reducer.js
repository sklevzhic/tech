const ADD_NEW_POST = 'ADD-NEW-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';

let initialState = {
    posts: [
        {id: 1, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 0, dislikeCount: 0},
        {id: 2, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 152, dislikeCount: 0},
        {id: 3, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 0, dislikeCount: 12},
        {id: 4, text: "Lorem", imgPost: "https://materializecss.com/images/sample-1.jpg", likecount: 12, dislikeCount: 0},
        {id: 1, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 0, dislikeCount: 0},
        {id: 2, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 152, dislikeCount: 0},
        {id: 3, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 0, dislikeCount: 12},
        {id: 4, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 12, dislikeCount: 0},
        {id: 1, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 0, dislikeCount: 0},
        {id: 2, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 152, dislikeCount: 0},
        {id: 3, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 0, dislikeCount: 12},
        {id: 4, text: "Lorem", imgPost: "https://materializecss.com/images/office.jpg", likecount: 12, dislikeCount: 0},
    ],
    newPostText: "",
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                text: state.newPostText,
                id: 158,
                likecount: 0,
                dislikeCount: 0,
                imgPost: "https://materializecss.com/images/sample-1.jpg"
            }
            state.posts.unshift(newPost);
            return state
        case CHANGE_NEW_POST:
            state.newPostText = action.newText;
            return state
    }
return state
}

export const addPostActionCreator = () => {
    return {type: ADD_NEW_POST}
};
export const updatePostActionCreator = (text) => {
    return {type: CHANGE_NEW_POST, newText: text }
};

export default ProfileReducer