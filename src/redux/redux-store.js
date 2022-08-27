import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware from "redux-thunk"
import appReducer from "./appReducer";


let reducers = combineReducers({
    profile: profileReducer,
    messages: dialogReducer,
    findUsers: usersReducer,
    auth: authReducer,
    app: appReducer
})



let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store.getState()

export default store