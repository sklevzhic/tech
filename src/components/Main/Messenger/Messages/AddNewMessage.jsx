import React from "react";

const AddNewMessage = (props) => {

    let onChangeNewMessage = (e) => {
        props.onChangeNewMessage(e.target.value)
    }
    let addNewMessage = () => {
            props.addNewMessage();
    }

    return (
        <div>
            <textarea
                className="materialize-textarea"
                value={props.newMessageText}
                onChange={ onChangeNewMessage }
            />
            <button onClick={ addNewMessage }>></button>
        </div>

    )
}
export default AddNewMessage