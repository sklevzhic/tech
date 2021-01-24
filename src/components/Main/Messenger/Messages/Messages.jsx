import s from "../Messenger.module.css";
import React from "react";
import AddNewMessage from "./AddNewMessage";
import MessagesList from "./MessagesList";
import store from "../../../../redux/state1";

const Dialogs = (props) => {
    return (
        <div className={s.messages}>
            <div className="col s12 m8 offset-m2 l6 offset-l3">
                <AddNewMessage
                    dispatch={store.dispatch}
                    newMessageText={props.newMessageText}
                />
                <MessagesList messages={props.messages}/>
            </div>
        </div>
    )
}
export default Dialogs