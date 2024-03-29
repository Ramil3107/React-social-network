import s from "./ProfileInfo.module.css";




const ProfileAboutMe = ({ userProfile, setEditMode, isOwner }) => {
    return (
        <span className={s.info}>
            <p>
                <b>Nickname:</b> <span style={{ color: "blue", border: "1px green solid", borderRadius: "5px", padding: "3px" }}>{userProfile.fullName === null ? "Anonim" : userProfile.fullName}</span>
            </p>
            <p >
                <b>Looking for a job:</b> <span style={{ color: userProfile.lookingForAJob ? "green" : "red" }}>{userProfile.lookingForAJob ? "Yes" : "No"}</span>
            </p>
            {
                userProfile.lookingForAJobDescription ?
                    <p >
                        <b>Professional Skills:</b> {userProfile.lookingForAJobDescription}
                    </p>
                    :
                    null
            }
            {
                isOwner ?
                    <button onClick={() => setEditMode(true)}>Edit</button>
                    :
                    null
            }
        </span>
    )
}

export default ProfileAboutMe