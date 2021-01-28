import React from "react";
import s from './Messenger.module.css'
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";
import store from "../../../redux/state1";
const Messenger = (props) => {
    return (
        <div className={s.dialogsWrapper}>
            <Dialogs dialogs={props.dialogs}/>
            <Messages
                dispatch={store.dispatch}
                messages={props.messages}
                newMessageText={props.newMessageText}
            />
        </div>
    )
}
export default Messenger