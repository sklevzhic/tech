import s from "../Messenger.module.css";
import React from "react";

const MessagesList = (props) => {

    let messagesElements = props.messages.map(el => {
        return <div className={s.messageItem}>
            <a className="btn-floating btn-large waves-effect waves-light red">АК</a>
            <p className={s.messageText}>{el.msg}</p>
        </div>
    })

    return (
        <div>
            { messagesElements }
        </div>
    )
}
export default MessagesList