import React from "react";
import s from "./ProfileInfo.module.css";
import avatarDefault from "../../../assets/images/defaultAvatar.jpeg"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import { useState } from "react";
import ProfilePhotoChangeBar from "./ProfilePhotoChangeBar";
import ProfileAboutMe from "./ProfileAboutMe";
import EditProfileAboutMe from "./EditProfileAboutMe";

const ProfileInfo = (props) => {

    let currentUserId = props.currentUserId ? props.currentUserId : props.myId
    let [editMode, setEditMode] = useState(false)

    return (
        props.isFetching ?
            <Preloader />
            :
            <div className={s.profileInfo}>
                <div className={s.coverImage}>
                    <img src='https://i.pinimg.com/736x/64/cc/fa/64ccfa4a392b9f3e1c6004fcedd3a18c.jpg' />
                </div>

                <span className={s.userInfo}>

                    <span className={s.userAvatar}>

                        {
                            props.photoLoading ?
                                <Preloader />
                                :
                                <img
                                    style={{ width: "300px", height: "300px" }}
                                    src={props.userProfile.photos.large === null ?
                                        avatarDefault :
                                        props.userProfile.photos.large}
                                    alt="avatar"
                                />
                        }

                        {
                            props.isOwner ?
                                <ProfilePhotoChangeBar
                                    uploadPhotoHandler={props.uploadPhotoHandler}
                                    photoUploadError={props.photoUploadError}
                                    photoLoading={props.photoLoading}
                                />
                                :
                                null
                        }


                        {
                            currentUserId != props.myId ?
                                <p>{props.userStatus ? props.userStatus : "No Status"}</p>
                                :
                                <ProfileStatus
                                    userStatus={props.userStatus}
                                    onUpdateUserStatus={props.onUpdateUserStatus} />
                        }

                    </span>

                    <span>

                        {editMode ?
                            <EditProfileAboutMe
                                changeAboutMeInfo={props.changeAboutMeInfo}
                                setEditMode={setEditMode}
                                aboutMeLoading={props.aboutMeLoading}
                                aboutMeError={props.aboutMeError}
                            />
                            :
                            <ProfileAboutMe isOwner={props.isOwner} setEditMode={setEditMode} userProfile={props.userProfile} />
                        }
                    </span>


                </span>
            </div>
    )








}


export default ProfileInfo;