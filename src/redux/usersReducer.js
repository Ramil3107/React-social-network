import { usersAPI } from "../api/usersAPI"

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const PAGE_SELECT = "PAGE_SELECT"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const SET_FIND_USER_NAME = "SET_FIND_USER_NAME"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOW_IN_PROGRESS = "TOGGLE_IS_FOLLOW_IN_PROGRESS"


let initialState = {
    users: [],
    usersTotalCount: 0,
    pageUsersLimit: 5,
    currentPage: 1,
    findUserName: "",
    isFetching: true,
    isFollowInProgress: []
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
                currentPage: action.page
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                usersTotalCount: action.count
            }
        case SET_FIND_USER_NAME:
            return {
                ...state,
                findUserName: action.name
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.active
            }
        case TOGGLE_IS_FOLLOW_IN_PROGRESS:
            return {
                ...state,
                isFollowInProgress: action.inProgress ?
                    [...state.isFollowInProgress, action.userId] :
                    [state.isFollowInProgress.filter(id => id != action.userId)]
            }
        default:
            return state
    }
}


// Action Creators:

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setPage = (page) => ({ type: PAGE_SELECT, page })
export const setTotalCount = (count) => ({ type: SET_TOTAL_COUNT, count })
export const setFindUserName = (name) => ({ type: SET_FIND_USER_NAME, name })
export const toggleIsFetching = (active) => ({ type: TOGGLE_IS_FETCHING, active })
export const toggleIsFollowInProgress = (inProgress, userId) => ({ type: TOGGLE_IS_FOLLOW_IN_PROGRESS, inProgress, userId })


// Thunks:

export const getUsers = (currentPage, pageUsersLimit) => async (dispatch) => {
    try {
        dispatch(toggleIsFetching(true))
        let data = await usersAPI.getUsers(currentPage, pageUsersLimit)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalCount(data.totalCount))
    } catch (error) {
        alert(error)
    }
}

export const changePage = (page, pageUsersLimit) => async (dispatch) => {
    try {
        dispatch(setPage(page))
        dispatch(toggleIsFetching(true))
        let data = await usersAPI.getPageUsers(page, pageUsersLimit)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
    } catch (error) {
        alert(error)
    }
}

export const searchUser = (findUserName) => async (dispatch) => {
    try {
        dispatch(toggleIsFetching(true))
        let data = await usersAPI.getUser(findUserName)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        if (findUserName === "") {
            dispatch(setPage(1))
        }
    } catch (error) {
        alert(error)
    }
}

export const follow = (userId) => async (dispatch) => {
    try {
        dispatch(toggleIsFollowInProgress(true, userId))
        let data = await usersAPI.followUser(userId)
        if (data.resultCode == 0) {
            dispatch(followAC(userId))
        }
        dispatch(toggleIsFollowInProgress(false, userId))
    } catch (error) {
        alert(error)
    }
}

export const unfollow = (userId) => async (dispatch) => {
    try {
        dispatch(toggleIsFollowInProgress(true, userId))
        let data = await usersAPI.unfollowUser(userId)
        if (data.resultCode == 0) {
            dispatch(unfollowAC(userId))
        }
        dispatch(toggleIsFollowInProgress(false, userId))
    } catch (error) {
        alert(error)
    }
}

export default usersReducer