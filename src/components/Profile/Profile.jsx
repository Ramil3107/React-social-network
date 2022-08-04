import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts 
            updatedNewPostText = {props.profile.updatedNewPostText}
            posts={props.profile.posts} 
            dispatch = {props.dispatch} />
        </div>
    )
}

export default Profile;