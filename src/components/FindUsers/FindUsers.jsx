import React from "react";
import s from "./FindUsers.module.css"
import avatarDefault from "../../assets/images/defaultAvatar.jpeg"
import Preloader from "../common/Preloader/Preloader";
import { NavLink } from "react-router-dom";

const FindUsers = (props) => {

    let pagesCount = Math.ceil(props.usersTotalCount / props.pageUsersLimit)
    let pages = []
    for (let i = 1; i <= pagesCount && i <= 30; i++) {
        pages.push(i)
    }

    return <div>
        <div className={s.pages}>
            {
                pages.map(p => <span
                    key={p}
                    onClick={() => props.onPageChanged(p)}
                    className={props.currentPage === p ? s.selectedPage : s.page}>
                    {p}
                </span>)
            }
        </div>

        <div className={s.findUser}>
            <input
                placeholder="find user..."
                value={props.findUserName}
                onChange={(e) => props.setFindUserName(e.target.value)}
                type="text" />

            <button onClick={props.findUser}>Find</button>
        </div>


        {
            props.isFetching ?
                <Preloader /> :
                props.users.map(user => <div className={s.item} key={user.id}>

                    <span className={s.user}>
                        <NavLink to={"/profile/" + user.id}>
                        <div>
                            <img className={s.avatar} src={user.photos.small === null ? avatarDefault : user.photos.small} />
                        </div>
                        </NavLink>
                        <div>
                            {user.followed ?
                                <button onClick={() => props.unfollow(user.id)}>Unfollow</button> :
                                <button onClick={() => props.follow(user.id)}>Follow</button>}
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
        }

    </div>
}

export default FindUsers