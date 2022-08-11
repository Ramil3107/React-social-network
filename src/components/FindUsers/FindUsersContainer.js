import { connect } from "react-redux";
import { 
    follow, 
    setPage, 
    setFindUserName, 
    setTotalCount, 
    setUsers, 
    toggleIsFetching, 
    unfollow } from "../../redux/usersReducer";
import FindUsers from "./FindUsers";
import * as axios from "axios"
import React from "react";


class FindUsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageUsersLimit}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (page) => {
        this.props.setPage(page)
        this.props.toggleIsFetching(true)
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageUsersLimit}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    findUser = () => {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?term=${this.props.findUserName}`)
            .then(response => {
                this.props.toggleIsFetching(false)
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
            isFetching = {this.props.isFetching}
            follow = {this.props.follow}
            unfollow = {this.props.unfollow}
            setFindUserName = {this.props.setFindUserName}
            onPageChanged = {this.onPageChanged}
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
            findUserName: state.findUsers.findUserName,
            isFetching: state.findUsers.isFetching
        }
    )
}


export default connect(mapStateToProps, 
    {follow,unfollow,setUsers,setPage,setTotalCount,setFindUserName,toggleIsFetching})
    (FindUsersContainer)