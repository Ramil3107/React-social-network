import React from "react"
import { connect, useSelector } from "react-redux"
import { logoutUser, signInUser } from "../../redux/authReducer"
import SignInForm from "./SingInForm"


const Login = ({ signInUser, logoutUser }) => {

    const { isAuth, login, captcha } = useSelector(state => state.auth)


    const signIn = (email, password, rememberMe, captcha = null) => {
        signInUser(email, password, rememberMe, captcha)
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
                <SignInForm captcha={captcha} signIn={signIn} />
            </div>
    )
}



export default connect(null, { signInUser, logoutUser })(Login)