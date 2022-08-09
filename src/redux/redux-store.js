import { combineReducers, createStore } from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";


let reducers = combineReducers({
    profile: profileReducer,
    messages: dialogReducer,
    findUsers: usersReducer
})



let store = createStore(reducers)

export default store