import s from "../Messenger.module.css";
import React from "react";
import AddNewMessageContainer from "./AddNewMessageContainer";
import MessagesListContainer from "./MessagesListContainer";


const Messages = () => {
    return (
        <div className={s.messages}>
            <div className="col s12 m8 offset-m2 l6 offset-l3">
                <AddNewMessageContainer/>
                <MessagesListContainer/>
            </div>
        </div>
    )
}
export default Messages