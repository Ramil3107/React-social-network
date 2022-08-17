import { profileAPI } from "../api/profileAPI"

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_TOGGLE_IS_FETCHING = "SET_TOGGLE_IS_FETCHING"


let initialState = {
    posts: [
        { id: 1, message: "Hi guys, how r u?", likecounter: 11 },
        { id: 2, message: "Props?? What is it?", likecounter: 15 },
        { id: 3, message: "React Kabzda forever", likecounter: 23 },
        { id: 4, message: "Today is tuesday or wednesday?", likecounter: 5 }
    ],
    updatedNewPostText: "my post",
    userProfile: null,
    isFetching: true
}

let profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 5, message: state.updatedNewPostText, likecounter: 8 }],
                updatedNewPostText: ""
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                updatedNewPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            }
        case SET_TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.status
            }
        default:
            return state

    }

}


// Action Creators:

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile })
export const toggleIsFetching = (status) => ({ type: SET_TOGGLE_IS_FETCHING, status })

// Thunks:

export const getUserProfile = (userId) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    profileAPI.getUserData(userId)
        .then(data => {
            dispatch(setUserProfile(data))
            dispatch(toggleIsFetching(false))
        })
}

export default profileReducer