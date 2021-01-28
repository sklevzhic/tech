const ADD_NEW_POST = 'ADD-NEW-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';

const ProfileReducer = (state, action) => {
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

export default ProfileReducer