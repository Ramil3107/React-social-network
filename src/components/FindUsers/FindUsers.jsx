import React from "react";
import s from "./FindUsers.module.css"
import * as axios from "axios"
import avatarDefault from "../../assets/images/defaultAvatar.jpeg"

class FindUsers extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageUsersLimit}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }


    render() {

        let pagesCount = Math.ceil(this.props.usersTotalCount / this.props.pageUsersLimit)
        let pages = []
        for (let i = 1; i <= pagesCount && i <= 30; i++) {
            pages.push(i)
        }

        let onPageChanged = (page) => {
            this.props.setPage(page)

            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageUsersLimit}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }

        return <div>
            <div className={s.pages}>
                {
                    pages.map(p => <span
                        key={p}
                        onClick={() => onPageChanged(p)}
                        className={this.props.currentPage === p ? s.selectedPage : s.page}>
                        {p}
                    </span>)
                }
            </div>

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
                        <p>{user.status === null ? "No status" : user.status}</p>
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