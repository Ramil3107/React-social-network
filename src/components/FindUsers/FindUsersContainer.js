import { connect } from "react-redux";
import { followActionCreator, unfollowActionCreator } from "../../redux/usersReducer";
import FindUsers from "./FindUsers";



let mapStateToProps = (state) => {
    return (
        {
            users: state.findUsers
        }
    )
}

let mapDispatchToProps = (dispatch) => {
    return (
        {
            follow: (userId) => {
                dispatch(followActionCreator(userId))
            },
            unfollow: (userId) => {
                dispatch(unfollowActionCreator(userId))
            }
        }
    )
}



const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)

export default FindUsersContainer