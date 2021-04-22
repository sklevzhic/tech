import s from "../Messenger.module.css";


const MessagesList = (props) => {
    let messagesElements = props.messages.map(el => {
        return <div key={el.id} className={s.messageItem}>
            <button className="btn-floating btn-large waves-effect waves-light red">АК</button>
            <p className={s.messageText}>{el.msg}</p>
        </div>
    })

    return (
        <div>
            {messagesElements}
        </div>
    )
}
export default MessagesList