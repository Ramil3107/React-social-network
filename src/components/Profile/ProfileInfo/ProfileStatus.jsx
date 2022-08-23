import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import s from "./ProfileInfo.module.css";




const ProfileStatus = ({ userStatus, onUpdateUserStatus}) => {

    let [status, setStatus] = useState(userStatus)
    let [editMode, setEditMode] = useState(false)

    useEffect(() => {
        setStatus(userStatus)
    },[userStatus])


    return (
        <div >
            {!editMode ?
                <div>
                    <span
                    className={s.status}
                        onDoubleClick={() => setEditMode(true)}
                    >
                        {userStatus || "No Status"}
                    </span>
                    <div className={s.steer} >double click to edit</div>
                </div>
                :
                <div>
                    <input
                        autoFocus={true}
                        onBlur={() => {
                            setEditMode(false)
                            onUpdateUserStatus(status)
                        }}
                        value={status}
                        onChange={(e) => setStatus(e.target.value)} />
                        <div className={s.steer} >click away to save</div>
                </div>
            }
        </div>
    )
}

export default ProfileStatus