import s from "../Messenger.module.css";
import React from "react";
import StoreContext from "../../../../StoreContext";

const MessagesList = (props) => {

    return (
        <div>
            <StoreContext.Consumer>
                { (store) => {
                    return store.getState().dialogsPage.messages.map(el => {
                        return <div key={el.id} className={s.messageItem}>
                            <a className="btn-floating btn-large waves-effect waves-light red">АК</a>
                            <p className={s.messageText}>{el.msg}</p>
                        </div>
                    })
                }}
            </StoreContext.Consumer>
        </div>
    )
}
export default MessagesList