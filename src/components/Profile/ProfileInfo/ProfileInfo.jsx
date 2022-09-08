import React from "react";
import s from "./ProfileInfo.module.css";
import avatarDefault from "../../../assets/images/defaultAvatar.jpeg"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import { useState } from "react";

const ProfileInfo = (props) => {

    let currentUserId = props.currentUserId ? props.currentUserId : props.myId
    let [photo, setPhoto] = useState(null)

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
                        <img src={props.userProfile.photos.large === null ?
                            avatarDefault :
                            props.userProfile.photos.large}
                            alt="avatar"
                        />
                        <div style={{marginTop:"10px"}}>
                            {
                                props.photoLoading ?
                                    <Preloader />
                                    :
                                    <div className={s.changeAvatar}>
                                        <input onChange={(e) => setPhoto(e.target.files[0])} type="file" />
                                        <button disabled={!photo} onClick={() => props.uploadPhotoHandler(photo)}>Upload</button>
                                        <p>{props.photoUploadError ? props.photoUploadError : null}</p>
                                    </div>
                            }
                        </div>

                        {
                            currentUserId != props.myId ?
                                <p>{props.userStatus ? props.userStatus : "No Status"}</p>
                                :
                                <ProfileStatus
                                    userStatus={props.userStatus}
                                    onUpdateUserStatus={props.onUpdateUserStatus} />
                        }

                    </span>


                    <span className={s.info}>
                        <p>
                            Nickname: {props.userProfile.fullName === null ? "..." : props.userProfile.fullName}
                        </p>
                        <p>
                            Contacts:
                        </p>
                        <p>Instagram: {props.userProfile.contacts.instagram === null ? "..." : props.userProfile.contacts.instagram}</p>
                        <p>Facebook: {props.userProfile.contacts.facebook === null ? "..." : props.userProfile.contacts.facebook}</p>
                        <p>Twiter: {props.userProfile.contacts.twitter === null ? "..." : props.userProfile.contacts.twitter}</p>
                        <p>GitHub: {props.userProfile.contacts.github === null ? "..." : props.userProfile.contacts.github}</p>
                    </span>

                </span>
            </div>
    )








}


export default ProfileInfo;