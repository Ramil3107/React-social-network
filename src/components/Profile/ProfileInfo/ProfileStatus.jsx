import React from "react";
import { useState } from "react";
import s from "./ProfileInfo.module.css";




const ProfileStatus = () => {

    let [status, setStatus] = useState("My status")
    let [editMode, setEditMode] = useState(false)

    return (
        <div className={s.status}>
            {!editMode ?
                <div>
                    <span
                        onDoubleClick={() => setEditMode(true)}
                    >
                        {status}
                    </span>
                </div>
                :
                <div>
                    <input
                        autoFocus={true}
                        onBlur={() => setEditMode(false)}
                        value={status}
                        onChange={(e) => setStatus(e.target.value)} />
                </div>
            }
        </div>
    )
}

export default ProfileStatus