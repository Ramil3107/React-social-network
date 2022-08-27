import { authAPI } from "../api/authAPI"
import { authUser, setAuthUserData } from "./authReducer"

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

export const initializeApp = () => (dispatch) => {
    authAPI.getAuthUserData()
        .then(data => {
            if (data.resultCode == 0) {
                let { id, login, email } = data.data
                dispatch(setAuthUserData(id, login, email))
            }
        })
        .then(
            dispatch(setInitialize())
        )
}

export default appReducer