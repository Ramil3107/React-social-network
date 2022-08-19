import React from "react";
import { Navigate, NavLink } from "react-router-dom";
import s from "./Dialog.module.css";



const DialogUser = ({ name, id }) => {

    let path = "/dialogs/" + id;

    return (
        <div className={s.user}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

const Message = ({ message }) => {
    return (
        <div className={s.message}>
            {message}
        </div>
    )
}


const Dialog = (props) => {

    let messages = props.messages

    let onMessageChange = (e) => {
        let text = e.target.value
        props.messageChange(text)
    }

    let onAddMessage = () => {
        props.addMessage()
    }

    let dialogEl = messages.dialogs.map(dialog => <DialogUser name={dialog.name} id={dialog.id} />)
    let messageEl = messages.messages.map(message => <Message message={message.message} id={message.id} />);


    return (
        <div className={s.dialogs}>

            <div className={s.dialog}>
                {dialogEl}
            </div>

            <div className={s.messages}>
                {messageEl}
            </div>

            <div className={s.textarea}>

                <textarea

                    onChange={onMessageChange}
                    value={messages.updatedNewMessageText}
                    cols="30"
                    rows="5" />

                <button className={s.addPostBtn} onClick={onAddMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialog;