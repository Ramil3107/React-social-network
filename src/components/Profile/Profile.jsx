import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className={s.content}>
            <div><img src='https://images.ctfassets.net/hrltx12pl8hq/69FDo9oeiebEZtaKX7Iq2V/d55fe9c40ef50e33912a025d2ff51b19/cms-bg-img.jpg?fit=fill&w=840&h=150' />
            </div>
            <div>avatar + dscrp</div>
            <MyPosts />
        </div>
    )
}

export default Profile;