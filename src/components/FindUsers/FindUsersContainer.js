import { connect } from "react-redux";
import { followActionCreator, pageSelectActionCreator, setFindUserNameActionCreator, setTotalCountActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../redux/usersReducer";
import FindUsers from "./FindUsers";



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



const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)

export default FindUsersContainer