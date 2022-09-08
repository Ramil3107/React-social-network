import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";




const ProfilePhotoChangeBar = ({ uploadPhotoHandler, photoUploadError, photoLoading }) => {
    let [photo, setPhoto] = useState(null)

    return (
        <div style={{ marginTop: "10px" }}>
            {
                photoLoading ?
                    <Preloader />
                    :
                    <div className={s.changeAvatar}>
                        <input onChange={(e) => setPhoto(e.target.files[0])} type="file" />
                        <button disabled={!photo} onClick={() => uploadPhotoHandler(photo)}>Upload</button>
                        <p>{photoUploadError ? photoUploadError : null}</p>
                    </div>
            }
        </div>
    )
}

export default ProfilePhotoChangeBar