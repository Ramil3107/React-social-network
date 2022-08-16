import { connect } from "react-redux";
import {
    follow,
    setPage,
    setFindUserName,
    setTotalCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/usersReducer";
import FindUsers from "./FindUsers";
import React from "react";
import { getPageUsers, getUser, getUsers } from "../../api/api";


class FindUsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        getUsers(this.props.currentPage, this.props.pageUsersLimit)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
            })
    }

    onPageChanged = (page) => {
        this.props.setPage(page)
        this.props.toggleIsFetching(true)

        getPageUsers(page, this.props.pageUsersLimit)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    onSearchUser = () => {
        this.props.toggleIsFetching(true)
        getUser(this.props.findUserName)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                if (this.props.findUserName === "") {
                    this.props.setPage(1)
                }
            })
    }

    render() {
        return <FindUsers
            {...this.props}
            onPageChanged={this.onPageChanged}
            onSearchUser={this.onSearchUser}
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
            isFetching: state.findUsers.isFetching
        }
    )
}


export default connect(mapStateToProps,
    { follow, unfollow, setUsers, setPage, setTotalCount, setFindUserName, toggleIsFetching })
    (FindUsersContainer)