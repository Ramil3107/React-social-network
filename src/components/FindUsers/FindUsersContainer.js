import { connect } from "react-redux";
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../redux/usersReducer";
import FindUsers from "./FindUsers";



let mapStateToProps = (state) => {
    return (
        {
            users: state.findUsers.users
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
            SetUsers: (users) => {
                dispatch(setUsersActionCreator(users))
            }
        }
    )
}



const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)

export default FindUsersContainer