import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";

const Dialog = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogUsers}>
                <div className={s.users + " " + s.active}>
                    <NavLink to="/dialog/1">Dmitry</NavLink>
                </div>
                <div className={s.users}>
                    <NavLink to="/dialog/2">Sasha</NavLink>
                </div>
                <div className={s.users}>
                    <NavLink to="/dialog/3"> Alex</NavLink>
                </div>
                <div className={s.users}>
                    <NavLink to="/dialog/4">Pavel</NavLink>
                </div>
            </div>

            <div className={s.messages}>
                <div className={s.message}>
                    Hi man!
                </div>
                <div className={s.message}>
                    How r u?
                </div>
                <div className={s.message}>
                    My name is Ramil
                </div>
            </div>
        </div>
    )
}

export default Dialog;