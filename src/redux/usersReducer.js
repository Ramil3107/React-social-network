const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const PAGE_SELECT = "PAGE_SELECT"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const SET_FIND_USER_NAME = "SET_FIND_USER_NAME"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"


let initialState = {
    users: [],
    usersTotalCount:0,
    pageUsersLimit: 5,
    currentPage:1,
    findUserName:"",
    isFetching:true
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
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching:action.active
            }
        default:
            return state
    }


}


export const follow = (userId) => ({ type: FOLLOW, userId: userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId: userId })
export const setUsers = (users) => ({ type: SET_USERS, users: users })
export const setPage = (page) => ({ type: PAGE_SELECT, page: page })
export const setTotalCount = (count) => ({ type: SET_TOTAL_COUNT, count: count })
export const setFindUserName = (name) => ({ type: SET_FIND_USER_NAME, name: name })
export const toggleIsFetching = (boolean) => ({ type: TOGGLE_IS_FETCHING, active: boolean })

export default usersReducer