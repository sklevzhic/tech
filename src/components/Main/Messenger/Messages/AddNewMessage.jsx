import React from "react";
import {updateMessageActionCreator, addNewMessageActionCreator} from "../../../../redux/state1";


const AddNewMessage = (props) => {

    let onChangeNewMessage = (e) =>{
        props.dispatch(updateMessageActionCreator(e.target.value))
    }
    let addNewMessage = (e) => {
        if (e.keyCode === 13) {
            props.dispatch(addNewMessageActionCreator())
            e.target.value = '';
        }
    }

    return (
        <div>
            <textarea
                className="materialize-textarea"
                onChange={ onChangeNewMessage }
                onKeyDown={ addNewMessage }
            ></textarea>
        </div>

    )
}
export default AddNewMessage