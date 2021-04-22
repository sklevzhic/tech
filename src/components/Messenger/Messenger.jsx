import React from "react";
import s from './Messenger.module.css'
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";

const Messenger = () => {
    return (
        <div className={s.dialogsWrapper}>
            <Dialogs />
            <Messages />
        </div>
    )
}
export default Messenger