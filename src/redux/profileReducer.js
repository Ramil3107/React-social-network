import { profileAPI } from "../api/profileAPI"

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_TOGGLE_IS_FETCHING = "SET_TOGGLE_IS_FETCHING"
const SET_USER_STATUS = "SET_USER_STATUS"
const UPDATE_USER_PHOTOS = "UPDATE_USER_PHOTOS"
const SET_PHOTO_IS_LOADING = "SET_PHOTO_IS_LOADING"
const SET_PHOTO_UPLOAD_ERROR = "SET_PHOTO_UPLOAD_ERROR"
const SET_ABOUT_ME_LOADER = "SET_ABOUT_ME_LOADER"
const SET_ABOUT_ME_ERROR = "SET_ABOUT_ME_ERROR"

let initialState = {
    posts: [
        { id: 1, message: "Hi guys, how r u?", likecounter: 11 },
        { id: 2, message: "Props?? What is it?", likecounter: 15 },
        { id: 3, message: "React Kabzda forever", likecounter: 23 },
        { id: 4, message: "Today is tuesday or wednesday?", likecounter: 5 }
    ],
    userProfile: null,
    isFetching: true,
    photoLoading: false,
    aboutMeLoading: false,
    aboutMeError: null,
    photoUploadError: null,
    userStatus: ""
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 5, message: action.newPost, likecounter: 0 }]
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
        case SET_PHOTO_IS_LOADING:
            return {
                ...state,
                photoLoading: action.status
            }
        case SET_ABOUT_ME_LOADER:
            return {
                ...state,
                aboutMeLoading: action.status
            }
        case SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.status
            }
        case UPDATE_USER_PHOTOS:
            return {
                ...state, userProfile: { ...state.userProfile, photos: action.photos }
            }
        case SET_PHOTO_UPLOAD_ERROR:
            return {
                ...state,
                photoUploadError: action.status
            }
        case SET_ABOUT_ME_ERROR:
            return {
                ...state,
                aboutMeError: action.error
            }
        default:
            return state
    }
}

// Action Creators:

export const addPostActionCreator = (newPost) => ({ type: ADD_POST, newPost })
export const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile })
export const toggleIsFetching = (status) => ({ type: SET_TOGGLE_IS_FETCHING, status })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const updateUserPhotos = (photos) => ({ type: UPDATE_USER_PHOTOS, photos })
export const toggleIsPhotoLoading = (status) => ({ type: SET_PHOTO_IS_LOADING, status })
export const setPhotoUploadError = (error) => ({ type: SET_PHOTO_UPLOAD_ERROR, error })
export const setAboutMeLoader = (status) => ({ type: SET_ABOUT_ME_LOADER, status })
export const setAboutMeError = (error) => ({ type: SET_ABOUT_ME_ERROR, error })



// Thunks:

export const getUserProfile = (userId) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let data = await profileAPI.getUserData(userId)
    dispatch(setUserProfile(data))
    dispatch(toggleIsFetching(false))
}

export const getUserStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(data))
}

export const updateUserStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateUserStatus(status)
    if (data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export const uploadPhotoThunk = (photo) => async (dispatch) => {
    dispatch(toggleIsPhotoLoading(true))
    let data = await profileAPI.uploadPhoto(photo)
    if (data.resultCode === 0) {
        dispatch(updateUserPhotos((data.data.photos)))
        dispatch(setPhotoUploadError(null))
    } else {
        dispatch(setPhotoUploadError("Opps, something went wrong! Refresh page and try again!"))
    }
    dispatch(toggleIsPhotoLoading(false))
}

export const saveAboutMeInfoThunk = (uploadData, setEditMode, id) => async (dispatch) => {
    dispatch(setAboutMeLoader(true))
    let data = await profileAPI.uloadAboutMe(uploadData)
    if (data.resultCode === 0) {
        setAboutMeError(null)
        dispatch(getUserProfile(id))
        setEditMode(false)
    } else {
        setAboutMeError("Opps, something went wrong! Refresh page and try again!")
    }
    dispatch(setAboutMeLoader(false))
}

export default profileReducer