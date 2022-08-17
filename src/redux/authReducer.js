import { headerAPI } from "../api/headerAPI"

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA"


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
        default:
            return state
    }


}

// Action Creators:

export const setAuthUserData = (id, login, email) => ({ type: SET_AUTH_USER_DATA, data: { id, login, email } })


// Thunks:

export const authUser = () => (dispatch) => {
    headerAPI.getAuthUserData()
        .then(data => {
            if (data.resultCode == 0) {
                let { id, login, email } = data.data
                dispatch(setAuthUserData(id, login, email))
            }
        })
}

export default authReducer