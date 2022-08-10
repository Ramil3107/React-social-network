import React from "react";
import s from "./FindUsers.module.css"
import * as axios from "axios"
import avatarDefault from "../../assets/images/defaultAvatar.jpeg"

let FindUsers = (props) => {


    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.SetUsers(response.data.items)
                })

        }
    }



    let follow = (userId) => {
        props.onFollow(userId)
    }
    let unFollow = (userId) => {
        props.onUnFollow(userId)
    }


    return (

        <div>
                <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(user => {
                    return (
                        <div className={s.item} key={user.id}>

                            <span className={s.user}>
                                <div>
                                    <img className={s.avatar} src={user.photos.small === null ? avatarDefault : user.photos.small} />
                                </div>
                                <div>
                                    {user.followed ?
                                        <button onClick={() => unFollow(user.id)}>Unfollow</button> :
                                        <button onClick={() => follow(user.id)}>Follow</button>}
                                </div>
                            </span>

                            <span className={s.userInfo}>
                                <p>user name: {user.name}</p>
                                <p>{user.status === null ? "My status" : user.status}</p>
                            </span>

                            <span className={s.userAdress}>
                                <p>{"user.country"}</p>
                                <p>{"user.city"}</p>
                            </span>

                        </ div>
                    )
                })
            }
        </div>

    )
}

export default FindUsers