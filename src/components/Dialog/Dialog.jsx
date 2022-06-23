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
    return (
        <div className={s.dialogs}>

            <div className={s.dialogUsers}>
                <DialogUser name="Dmitry" id="1" />
                <DialogUser name="Sasha" id="2" />
                <DialogUser name="Alex" id="3" />
                <DialogUser name="Pavel" id="4" />
            </div>

            <div className={s.messages}>
                <Message message="Hi man!" />
                <Message message="How r u?" />
                <Message message="My name is Ramil" />
            </div>
        </div>
    )
}

export default Dialog;