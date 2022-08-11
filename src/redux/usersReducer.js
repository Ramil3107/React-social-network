const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const PAGE_SELECT = "PAGE_SELECT"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const SET_FIND_USER_NAME = "SET_FIND_USER_NAME"


let initialState = {
    users: [],
    usersTotalCount:0,
    pageUsersLimit: 5,
    currentPage:1,
    findUserName:""
}

let usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.userId) {
                        user.followed = true
                        return user
                    } else {
                        return user
                    }

                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.userId) {
                        user.followed = false
                        return user
                    } else {
                        return user
                    }

                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case PAGE_SELECT:
            return {
                ...state,
                currentPage:action.page
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                usersTotalCount:action.count
            }
        case SET_FIND_USER_NAME:
            return {
                ...state,
                findUserName:action.name
            }
        default:
            return state
    }


}


export const followActionCreator = (userId) => ({ type: FOLLOW, userId: userId })
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId: userId })
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users: users })
export const pageSelectActionCreator = (page) => ({ type: PAGE_SELECT, page: page })
export const setTotalCountActionCreator = (count) => ({ type: SET_TOTAL_COUNT, count: count })
export const setFindUserNameActionCreator = (name) => ({ type: SET_FIND_USER_NAME, name: name })

export default usersReducer