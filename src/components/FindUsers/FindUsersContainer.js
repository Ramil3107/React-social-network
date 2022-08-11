import { connect } from "react-redux";
import { followActionCreator, pageSelectActionCreator, setFindUserNameActionCreator, setTotalCountActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../redux/usersReducer";
import FindUsers from "./FindUsers";
import * as axios from "axios"
import React from "react";


class FindUsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageUsersLimit}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (page) => {
        this.props.setPage(page)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageUsersLimit}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    onFindUserChanged = (e) => {
        let text = e.target.value
        this.props.setFindUserName(text)
    }

    findUser = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?term=${this.props.findUserName}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                if (this.props.findUserName === "") {
                    this.props.setPage(1)
                }
            })
    }

    render() {
        return <FindUsers
            users={this.props.users}
            usersTotalCount={this.props.usersTotalCount}
            pageUsersLimit={this.props.pageUsersLimit}
            currentPage={this.props.currentPage}
            findUserName={this.props.findUserName}
            onFollow = {this.props.onFollow}
            onUnFollow = {this.props.onUnFollow}
            onPageChanged = {this.onPageChanged}
            onFindUserChanged = {this.onFindUserChanged}
            findUser = {this.findUser}
             />
    }
}


let mapStateToProps = (state) => {
    return (
        {
            users: state.findUsers.users,
            usersTotalCount: state.findUsers.usersTotalCount,
            pageUsersLimit: state.findUsers.pageUsersLimit,
            currentPage: state.findUsers.currentPage,
            findUserName: state.findUsers.findUserName
        }
    )
}

let mapDispatchToProps = (dispatch) => {
    return (
        {
            onFollow: (userId) => {
                dispatch(followActionCreator(userId))
            },
            onUnFollow: (userId) => {
                dispatch(unfollowActionCreator(userId))
            },
            setUsers: (users) => {
                dispatch(setUsersActionCreator(users))
            },
            setPage: (page) => {
                dispatch(pageSelectActionCreator(page))
            },
            setTotalCount: (count) => {
                dispatch(setTotalCountActionCreator(count))
            },
            setFindUserName: (name) => {
                dispatch(setFindUserNameActionCreator(name))
            }
        }
    )
}



export default connect(mapStateToProps, mapDispatchToProps)(FindUsersContainer)