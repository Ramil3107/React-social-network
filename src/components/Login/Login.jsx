import React from "react"
import { connect, useSelector } from "react-redux"
import { logoutUser, signInUser } from "../../redux/authReducer"
import SignInForm from "./SingInForm"


const Login = ({ signInUser, logoutUser }) => {

    const isAuth = useSelector(state => state.auth.isAuth)
    const login = useSelector(state => state.auth.login)


    const signIn = (email, password, rememberMe) => {
        signInUser(email, password, rememberMe)
    }

    const logout = () => {
        logoutUser()
    }

    return (
        isAuth ?
            <div>
                <h1 >Welcome {login}</h1>
                Current User: {login}
                <div>
                    <button onClick={logout}>Logout</button>
                </div>
            </div>
            :

            <div>
                <h1 >Sign In Form</h1>
                <SignInForm signIn={signIn} />
            </div>
    )
}



export default connect(null, { signInUser, logoutUser })(Login)