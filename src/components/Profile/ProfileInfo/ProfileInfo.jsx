import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>

            <div className={s.coverImage}>
                <img src='https://images.ctfassets.net/hrltx12pl8hq/69FDo9oeiebEZtaKX7Iq2V/d55fe9c40ef50e33912a025d2ff51b19/cms-bg-img.jpg?fit=fill&w=840&h=150' />
            </div>

            <div className={s.userInfo}>avatar + dscrp</div>

        </div>
    )
}
export default ProfileInfo;