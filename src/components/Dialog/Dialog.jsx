import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";



const DialogUser = ({name,id}) => {

    let path = "/dialogs/" + id;

    return (
        <div className={s.user}>
            <NavLink to={path}>{name}</NavLink>
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

    let messageTextArea = React.createRef()


    function alertTextAreaText () {
        alert (messageTextArea.current.value)
    }

    let dialogEl = props.messages.dialogs.map(dialog => <DialogUser name={dialog.name} id={dialog.id} />)

    let messageEl = props.messages.messages.map(message => <Message message={message.message} id={message.id} />);

    return (
        <div className={s.dialogs}>

            <div className={s.dialog}>
                {dialogEl}
            </div>

            <div className={s.messages}>
                {messageEl}
            </div>

            <div className={s.textarea}>
                <textarea  ref={messageTextArea} cols="30" rows="5"></textarea>
                <button onClick={alertTextAreaText}>Send</button>
            </div>
        </div>
    )
}

export default Dialog;