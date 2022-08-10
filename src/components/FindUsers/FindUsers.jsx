import React from "react";
import s from "./FindUsers.module.css"
import * as axios from "axios"
import avatarDefault from "../../assets/images/defaultAvatar.jpeg"

class FindUsers extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.SetUsers(response.data.items)
            })
    }


    render() {
        return <div>
            {
                this.props.users.map(user => <div className={s.item} key={user.id}>

                    <span className={s.user}>
                        <div>
                            <img className={s.avatar} src={user.photos.small === null ? avatarDefault : user.photos.small} />
                        </div>
                        <div>
                            {user.followed ?
                                <button onClick={() => this.props.onUnFollow(user.id)}>Unfollow</button> :
                                <button onClick={() => this.props.onFollow(user.id)}>Follow</button>}
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
                )}
        </div>
    }
}

export default FindUsers