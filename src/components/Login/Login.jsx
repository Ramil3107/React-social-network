import React from "react"
import { connect, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logoutUser, signInUser } from "../../redux/authReducer"
import SignInForm from "./SingInForm"


const Login = ({ signInUser, logoutUser }) => {

    const { isAuth, login, captcha, loading, email, id} = useSelector(state => state.auth)
    const navigate = useNavigate()


    const signIn = async (email, password, rememberMe, captcha = null) => {
        let auth = await signInUser(email, password, rememberMe, captcha)
        navigate("/profile")
    }

    const logout = () => {
        logoutUser()
    }

    return (
        isAuth ?
            <div style={{marginLeft:"10px"}}>
                <h1>Welcome, <b style={{ color: "green" }}>{email}</b></h1>
                <b>USER ID:</b> <b style={{ color: "green" }}>{id}</b><br/>
                <b>USER EMAIL:</b> <b style={{ color: "green" }}>{email}</b>
                <div style={{marginTop:"10px"}}>
                    <button onClick={logout}>Logout</button>
                </div>
            </div>
            :

            <div>
                <h1 >Sign In Form</h1>
                <SignInForm loading={loading} captcha={captcha} signIn={signIn} />
            </div>
    )
}



export default connect(null, { signInUser, logoutUser })(Login)