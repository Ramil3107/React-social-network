import React from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo userProfile={props.userProfile} isFetching={props.isFetching} />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;