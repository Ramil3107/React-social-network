import { authAPI } from "../api/authAPI"
import { setAuthUserData } from "./authReducer";

const SET_INITIALIZE = "SET_INITIALIZE"


let initialState = {
    initialized: false
}

let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZE:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

// Action Creators:

export const setInitialize = () => ({ type: SET_INITIALIZE })

// Thunks:

export const initializeApp = () => async (dispatch) => {
    try {
        let data = await authAPI.getAuthUserData()

        if (data.resultCode == 0) {
            let { id, login, email } = data.data
            dispatch(setAuthUserData(id, login, email))
            dispatch(setInitialize())
        }
    } catch (error) {
        alert(error)
    }
}

export default appReducer