import React from "react"
import { useForm } from "react-hook-form"
import styles from "./Login.module.css"
import SignInForm from "./SingInForm"


const Login = () => {

    return (
        <div>
            <h1 >Sign In Form</h1>
            <SignInForm />
        </div>
    )
}



export default Login