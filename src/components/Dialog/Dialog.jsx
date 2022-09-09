import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
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


const Dialog = ({ stateMessages, addMessage }) => {

    const { register, handleSubmit, reset } = useForm()

    let messages = stateMessages

    let onAddMessage = (message) => {
        addMessage(message)
        reset()
    }

    let dialogEl = messages.dialogs.map(dialog => <DialogUser name={dialog.name} id={dialog.id} />)
    let messageEl = messages.messages.map(message => <Message message={message.message} id={message.id} />);


    return (
        <>
            <h1>Attention! Useless page! </h1>
            <p style={{textAlign:"center"}}>I save this page for "WebSocket Chat" lessons.</p>
            <div className={s.dialogs}>

                <div className={s.dialog}>
                    {dialogEl}
                </div>

                <div className={s.messages}>
                    {messageEl}
                </div>

                <div className={s.textarea}>

                    <form onSubmit={handleSubmit((data) => onAddMessage(data.message))}>
                        <textarea
                            {...register("message")}
                            cols="30"
                            rows="5"
                        />
                        <button type="submit">Send</button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Dialog;