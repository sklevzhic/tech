import {Link} from "react-router-dom";
import s from "../Messenger.module.css";
import React from "react";

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(el => {
        return <Link to={`/dialogs/${el.id}`} className="collection-item"><span className="badge">1</span>{el.name}</Link>
    })


return (
    <div className={'collection ' + s.dialogsList}>
        { dialogsElements }
    </div>
)

}
export default Dialogs