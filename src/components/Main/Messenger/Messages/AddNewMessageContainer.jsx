import React from "react";
import {addNewMessageActionCreator, updateMessageActionCreator} from "../../../../redux/Dialogs-reducer";
import AddNewMessage from "./AddNewMessage";
import StoreContext from "../../../../StoreContext";



const AddNewMessageContainer = () => {

    return (
        <div>
            <StoreContext>
                { (store) => {
                    let onChangeNewMessage = (text) =>{
                    store.dispatch(updateMessageActionCreator(text))
                    }
                    let addNewMessage = () => {
                        store.dispatch(addNewMessageActionCreator())
                    }
                        return <AddNewMessage onChangeNewMessage={onChangeNewMessage} addNewMessage={addNewMessage} />
                }

                }

            </StoreContext>
        </div>

    )
}
export default AddNewMessageContainer