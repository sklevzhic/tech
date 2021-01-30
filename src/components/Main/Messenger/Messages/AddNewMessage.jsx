import React from "react";



const AddNewMessage = (props) => {

    let onChangeNewMessage = (e) => {
        props.onChangeNewMessage(e.target.value)

    }
    let addNewMessage = (e) => {
        if (e.keyCode === 13) {
            props.addNewMessage();
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