import { combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";


let reducers = combineReducers({
    profile: profileReducer,
    messages: dialogReducer,
    findUsers: usersReducer,
    auth:authReducer
})



let store = createStore(reducers)

window.store = store.getState()

export default store