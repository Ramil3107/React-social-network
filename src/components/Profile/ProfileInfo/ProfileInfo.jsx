import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>

            <div className={s.coverImage}>
                <img src='https://i.pinimg.com/736x/64/cc/fa/64ccfa4a392b9f3e1c6004fcedd3a18c.jpg' />
            </div>

            <div className={s.userInfo}>avatar + dscrp</div>

        </div>
    )
}
export default ProfileInfo;