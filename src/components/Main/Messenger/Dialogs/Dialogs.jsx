import {Link} from "react-router-dom";
import s from "../Messenger.module.css";
import React from "react";
import StoreContext from "../../../../StoreContext";

const Dialogs = () => {
    return (
        <div className={'collection ' + s.dialogsList}>
            <StoreContext.Consumer>
                { (store) => {
                    return store.getState().dialogsPage.dialogs.map(el => {
                        return <Link key={el.id} to={`/dialogs/${el.id}`} className="collection-item"><span
                            className="badge">1</span>{el.name}</Link>
                    })
                }}
            </StoreContext.Consumer>
        </div>
    )
}
export default Dialogs