import ProfileReducer, {addPostActionCreator, deletePost} from "./Profile-reducer";
let state = {
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
    ]
}
it('length of post should be incremented ', function () {
    let action = addPostActionCreator("aaaa")

    let newState = ProfileReducer(state,action)
    expect(newState.posts.length).toBe(3)
    expect(newState.posts[0].text).toBe("aaaa")
});

it('deleted post', function () {
    let action = deletePost(0)

    let newState = ProfileReducer(state, action)
    expect(newState.posts.length).toBe(1)
});


