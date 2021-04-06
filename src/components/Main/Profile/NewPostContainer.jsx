import {addPostActionCreator, updatePostActionCreator} from "../../../redux/Profile-reducer";
import NewPost from "./NewPost";
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updatePost: (text) => {

            dispatch(updatePostActionCreator(text))
        }
    }
}

const NewPostContainer = connect (mapStateToProps, mapDispatchToProps)(NewPost)
export default NewPostContainer