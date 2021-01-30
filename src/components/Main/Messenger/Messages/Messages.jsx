import s from "../Messenger.module.css";
import React from "react";
import MessagesList from "./MessagesList";
import AddNewMessageContainer from "./AddNewMessageContainer";
import StoreContext from "../../../../StoreContext";

const Messages = () => {
    return (
        <div className={s.messages}>
            <StoreContext.Consumer>
                {(store) => {
                    return <div className="col s12 m8 offset-m2 l6 offset-l3">
                        <AddNewMessageContainer
                            dispatch={store.dispatch}
                            newMessageText={store.newMessageText}
                        />
                        <MessagesList messages={store.messages}/>
                    </div>
                }}
            </StoreContext.Consumer>

        </div>
    )
}
export default Messages