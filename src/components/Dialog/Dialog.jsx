import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";

const DialogUser = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.user}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}


const Dialog = (props) => {

    let dialogEl = props.dialogs.map(dialog => <DialogUser name={dialog.name} id={dialog.id} />)

    let messageEl = props.messages.map(message => <Message message={message.message} id={message.id} />);

    return (
        <div className={s.dialogs}>

            <div className={s.dialog}>
                {dialogEl}
            </div>

            <div className={s.messages}>
                {messageEl}
            </div>
        </div>
    )
}

export default Dialog;