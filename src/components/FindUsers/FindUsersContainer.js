import { connect } from "react-redux";
import {
    getUsers,
    changePage,
    searchUser,
    follow,
    unfollow,
    setFindUserName
} from "../../redux/usersReducer";
import FindUsers from "./FindUsers";
import React from "react";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/withRedirect";


class FindUsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageUsersLimit)
    }

    onPageChanged = (page) => {
        this.props.changePage(page, this.props.pageUsersLimit)
    }

    onSearchUser = () => {
        this.props.searchUser(this.props.findUserName)
    }

    onFollow = (userId) => {
        this.props.follow(userId)
    }

    onUnfollow = (userId) => {
        this.props.unfollow(userId)
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




export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, { follow, unfollow, searchUser, getUsers, changePage, setFindUserName }))
    (FindUsersContainer)