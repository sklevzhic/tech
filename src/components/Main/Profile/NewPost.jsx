import React from 'react'
import {Link} from "react-router-dom";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/state1";

    const NewPost = (props) => {
        let newPostText = React.createRef();

        const  addPost = () => {
            props.dispatch(addPostActionCreator())
        }

        const updatePost = () => {
            let text = newPostText.current.value;
            props.dispatch(updatePostActionCreator(text))
        }
    return (

        <div>
            <div className="row">
                <Link
                    to='/profile'
                    className="btn-floating btn-large waves-effect waves-light red">
                    <i className="material-icons">arrow_back</i>
                </Link>
            </div>
            <div className="row">
                <form className="col s12">

                    <div className="input-field">
                        <i className="material-icons prefix">account_circle</i>
                        <textarea
                            id="textarea1"
                            className="materialize-textarea"
                            ref={newPostText}
                            onChange={ updatePost }
                        > </textarea>
                        <label htmlFor="textarea1" className='active'>Textarea</label>


                        <Link to='/profile'
                            className="btn waves-effect waves-light"
                            type="submit"
                            name="action"
                            onClick={ addPost }
                        >Опубликовать
                            <i className="material-icons right">send</i>
                        </Link>
                    </div>

                </form>
            </div>
        </div>

    )
}

export default NewPost