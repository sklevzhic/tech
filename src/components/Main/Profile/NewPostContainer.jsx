import React from 'react'
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/Profile-reducer";
import NewPost from "./NewPost";
import StoreContext from "../../../StoreContext";

const NewPostContainer = () => {

    return (
        <div>
            <StoreContext.Consumer>
                { (store) => {
                    const  addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }

                    const updatePost = (text) => {
                        store.dispatch(updatePostActionCreator(text))
                    }

                    return <NewPost addPost={addPost} updatePost={updatePost} />
                }}
            </StoreContext.Consumer>

        </div>
    )
}

export default NewPostContainer