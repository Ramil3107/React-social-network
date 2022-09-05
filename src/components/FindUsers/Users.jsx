import { NavLink } from "react-router-dom"
import s from "./FindUsers.module.css"
import avatarDefault from "../../assets/images/defaultAvatar.jpeg"



const Users = ({ users, onFollow, onUnfollow, isFollowInProgress }) => {
    return (
        users.map(user => <div className={s.item} key={user.id}>
            
            <span className={s.user}>
                <NavLink to={"/profile/" + user.id}>
                    <div>
                        <img
                            className={s.avatar}
                            src={user.photos.small === null ? avatarDefault : user.photos.small} />
                    </div>
                </NavLink>
                <div>
                    {!user.followed ?
                        <button
                            disabled={isFollowInProgress.some(id => id == user.id)}
                            onClick={() => onFollow(user.id)}>
                            Follow
                        </button>
                        :
                        <button
                            disabled={isFollowInProgress.some(id => id == user.id)}
                            onClick={() => onUnfollow(user.id)}>
                            Unfollow
                        </button>}
                </div>
            </span>

            <span className={s.userInfo}>
                <p>user name: {user.name}</p>
                <p>{user.status === null ? "No status" : user.status}</p>
            </span>

            <span className={s.userAdress}>
                <p>{"user.country"}</p>
                <p>{"user.city"}</p>
            </span>

        </ div>
        )
    )
}

export default Users