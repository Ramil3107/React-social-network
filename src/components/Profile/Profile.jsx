import React from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo
                aboutMeLoading={props.aboutMeLoading}
                aboutMeError={props.aboutMeError}
                changeAboutMeInfo={props.changeAboutMeInfo}
                isOwner={props.isOwner}
                photoLoading={props.photoLoading}
                photoUploadError={props.photoUploadError}
                uploadPhotoHandler={props.uploadPhotoHandler}
                currentUserId={props.router.params.userId}
                myId={props.myId}
                onUpdateUserStatus={props.onUpdateUserStatus}
                userProfile={props.userProfile}
                isFetching={props.isFetching}
                userStatus={props.userStatus}
            />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;