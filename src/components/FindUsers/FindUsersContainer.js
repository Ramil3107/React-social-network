import { connect } from "react-redux";
import {
    follow,
    setPage,
    setFindUserName,
    setTotalCount,
    setUsers,
    toggleIsFetching,
    unfollow,
    toggleIsFollowInProgress
} from "../../redux/usersReducer";
import FindUsers from "./FindUsers";
import React from "react";
import { usersAPI } from "../../api/usersAPI";


class FindUsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageUsersLimit)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
            })
    }

    onPageChanged = (page) => {
        this.props.setPage(page)
        this.props.toggleIsFetching(true)

        usersAPI.getPageUsers(page, this.props.pageUsersLimit)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    onSearchUser = () => {
        this.props.toggleIsFetching(true)
        usersAPI.getUser(this.props.findUserName)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                if (this.props.findUserName === "") {
                    this.props.setPage(1)
                }
            })
    }

    onFollow = (userId) => {
        this.props.toggleIsFollowInProgress(true, userId)
        usersAPI.followUser(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    this.props.follow(userId)
                }
                this.props.toggleIsFollowInProgress(false,userId)
            })
    }

    onUnfollow = (userId) => {
        this.props.toggleIsFollowInProgress(true,userId)
        usersAPI.unfollowUser(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    this.props.unfollow(userId)
                }
                this.props.toggleIsFollowInProgress(false,userId)
            })
    }


    render() {
        return <FindUsers
            {...this.props}
            onPageChanged={this.onPageChanged}
            onSearchUser={this.onSearchUser}
            onFollow={this.onFollow}
            onUnfollow={this.onUnfollow}
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
            findUserName: state.findUsers.findUserName,
            isFetching: state.findUsers.isFetching,
            isFollowInProgress: state.findUsers.isFollowInProgress
        }
    )
}


export default connect(mapStateToProps,
    { follow, unfollow, setUsers, setPage, setTotalCount, setFindUserName, toggleIsFetching, toggleIsFollowInProgress })
    (FindUsersContainer)