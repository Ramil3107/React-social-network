import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    profile: profileReducer,
    messages: dialogReducer,
    findUsers: usersReducer,
    auth:authReducer
})



let store = createStore(reducers,applyMiddleware(thunkMiddleware))

window.store = store.getState()

export default store