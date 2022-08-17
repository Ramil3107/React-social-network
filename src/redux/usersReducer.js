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

export const followAC = (userId) => ({ type: FOLLOW, userId: userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId: userId })
export const setUsers = (users) => ({ type: SET_USERS, users: users })
export const setPage = (page) => ({ type: PAGE_SELECT, page: page })
export const setTotalCount = (count) => ({ type: SET_TOTAL_COUNT, count: count })
export const setFindUserName = (name) => ({ type: SET_FIND_USER_NAME, name: name })
export const toggleIsFetching = (boolean) => ({ type: TOGGLE_IS_FETCHING, active: boolean })
export const toggleIsFollowInProgress = (inProgress, userId) => ({ type: TOGGLE_IS_FOLLOW_IN_PROGRESS, inProgress, userId })


// Thunks:

export const getUsers = (currentPage, pageUsersLimit) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageUsersLimit)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalCount(data.totalCount))
        })
}

export const changePage = (page, pageUsersLimit) => (dispatch) => {
    dispatch(setPage(page))
    dispatch(toggleIsFetching(true))
    usersAPI.getPageUsers(page, pageUsersLimit)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
        })
}

export const searchUser = (findUserName) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUser(findUserName)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            if (findUserName === "") {
                dispatch(setPage(1))
            }
        })
}

export const follow = (userId) => (dispatch) => {
    dispatch(toggleIsFollowInProgress(true, userId))
    usersAPI.followUser(userId)
        .then(data => {
            if (data.resultCode == 0) {
                dispatch(followAC(userId))
            }
            dispatch(toggleIsFollowInProgress(false, userId))
        })
}

export const unfollow = (userId) => (dispatch) => {
    dispatch(toggleIsFollowInProgress(true, userId))
    usersAPI.unfollowUser(userId)
        .then(data => {
            if (data.resultCode == 0) {
                dispatch(unfollowAC(userId))
            }
            dispatch(toggleIsFollowInProgress(false, userId))
        })
}


export default usersReducer