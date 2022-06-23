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

    let dialogUsers = [
        {id:1, name: "Dmitry"},
        {id:2, name: "Sasha"},
        {id:3, name: "Alex"},
        {id:4, name: "Pavel"}
    ]

    let messages = [
        {id:1, message: "Hi man!"},
        {id:2, message: "How r u?"},
        {id:3, message: "My name is Ramil"}
    ]

    return (
        <div className={s.dialogs}>

            <div className={s.dialogUsers}>
                <DialogUser name={dialogUsers[0].name} id={dialogUsers[0].id} />
                <DialogUser name={dialogUsers[1].name} id={dialogUsers[1].id} />
                <DialogUser name={dialogUsers[2].name} id={dialogUsers[2].id} />
                <DialogUser name={dialogUsers[3].name} id={dialogUsers[3].id} />
            </div>

            <div className={s.messages}>
                <Message message={messages[0].message} id={messages[0].id} />
                <Message message={messages[1].message} id={messages[1].id} />
                <Message message={messages[2].message} id={messages[2].id} />
            </div>
        </div>
    )
}

export default Dialog;