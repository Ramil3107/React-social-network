import React from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo
            onUpdateUserStatus={props.onUpdateUserStatus}
            userProfile={props.userProfile} 
            isFetching={props.isFetching}
            userStatus={props.userStatus}
            />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;