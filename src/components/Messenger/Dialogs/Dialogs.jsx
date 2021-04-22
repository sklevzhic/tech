import {Link} from "react-router-dom";
import s from "../Messenger.module.css";
import React from "react";
import store from "../../../redux/redux-store";

let dialogsElements = store.getState().dialogsPage.dialogs.map(el => {
    return <Link key={el.id} to={`/dialogs/${el.id}`} className="collection-item"><span
        className="badge">1</span>{el.name}</Link>
})

const Dialogs = () => {
    return (
        <div className={'collection ' + s.dialogsList}>
            {dialogsElements}
        </div>
    )
}
export default Dialogs