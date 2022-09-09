import { authAPI } from "../api/authAPI"

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA"
const CLEAN_USER_DATA = "CLEAN_USER_DATA"
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL"
const SET_LOADING = "SET_LOADING"

let initialState = {
    id: null,
    login: null,
    email: null,
    captcha: null,
    isAuth: false,
    loading: false
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
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captcha: action.captcha
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.status
            }
        default:
            return state
    }
}

// Action Creators:

export const setAuthUserData = (id, login, email) => ({ type: SET_AUTH_USER_DATA, data: { id, login, email } })
export const cleanUserData = () => ({ type: CLEAN_USER_DATA })
export const setCaptchaUrl = (captcha) => ({ type: SET_CAPTCHA_URL, captcha })
export const setLoading = (status) => ({ type: SET_LOADING, status })


// Thunks:

export const authUser = () => async (dispatch) => {
    try {
        let data = await authAPI.getAuthUserData()
        if (data.resultCode == 0) {
            let { id, login, email } = data.data
            dispatch(setAuthUserData(id, login, email))
        }
    } catch (error) {
        alert(error)
    }

}

export const signInUser = (email, password, rememberMe, captcha = null) => async (dispatch) => {
    try {
        dispatch(setLoading(true))
        let data = await authAPI.signInRequest(email, password, rememberMe, captcha)
        if (data.resultCode == 0) {
            dispatch(authUser())
        } else if (data.resultCode == 10) {
            dispatch(getCaptchaThunk)
        } else if (data.resultCode == 1) {
            alert("Incorrect email or password")
        }
        dispatch(setLoading(false))
    } catch (error) {
        alert(error)
    }

}

export const logoutUser = () => async (dispatch) => {
    try {
        let data = await authAPI.logoutRequest()
        if (data.resultCode == 0) {
            dispatch(cleanUserData())
        }
    } catch (error) {
        alert(error)
    }
}

export const getCaptchaThunk = () => async (dispatch) => {
    try {
        let data = await authAPI.getCaptcha()
        let captcha = data.url
        setCaptchaUrl(captcha)
    } catch (error) {
        alert(error)
    }
}



export default authReducer