import { Navigate, useNavigate } from "react-router-dom"
import { authAPI } from "../api/authAPI"

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA"
const CLEAN_USER_DATA = "CLEAN_USER_DATA"





let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

let authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case CLEAN_USER_DATA:
            return {
                ...state,
                id: null,
                login: null,
                email: null,
                isAuth: false
            }
        default:
            return state
    }


}

// Action Creators:

export const setAuthUserData = (id, login, email) => ({ type: SET_AUTH_USER_DATA, data: { id, login, email } })
export const cleanUserData = () => ({ type: CLEAN_USER_DATA })


// Thunks:

export const authUser = () => (dispatch) => {
    authAPI.getAuthUserData()
        .then(data => {
            if (data.resultCode == 0) {
                let { id, login, email } = data.data
                dispatch(setAuthUserData(id, login, email))
            }
        })
}

export const signInUser = (email, password, rememberMe) => (dispatch) => {
    authAPI.signInRequest(email, password, rememberMe)
        .then(data => {
            if (data.resultCode == 0) {
                dispatch(authUser())
            }
        })
}
export const logoutUser = () => (dispatch) => {
    authAPI.logoutRequest()
        .then(data => {
            if (data.resultCode == 0) {
                dispatch(cleanUserData())
            }
        })
}

export default authReducer