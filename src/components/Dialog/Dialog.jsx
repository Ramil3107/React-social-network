import React from "react";
import { NavLink } from "react-router-dom";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogReducer";
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

    let messageTextArea = React.createRef()


    let onMessageChange = (e) => {
        let text = e.target.value
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
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

                <textarea
                    
                    onChange={onMessageChange}
                    value={props.messages.updatedNewMessageText}
                    cols="30"
                    rows="5" />

                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialog;