import React from "react"
import { useForm } from "react-hook-form"
import styles from "./Login.module.css"


const Login = () => {

    const { register, handleSubmit, reset } = useForm()

    const onSubmit = (data) =>{
        console.log(data)
        reset()
    } 

    return (
        <div>
            <h1 >Sign In Form</h1>
            <form onSubmit={handleSubmit(data => onSubmit((data)))}>
                <div><input placeholder="login" type="text" {...register("login")} /></div>
                <div><input placeholder="password" type="text" {...register("password")} /></div>
                <div><input type="checkbox" {...register("rememberMe")} />Remember Me</div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}



export default Login