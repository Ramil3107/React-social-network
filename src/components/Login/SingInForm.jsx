import React from "react"
import { useForm } from "react-hook-form"


const SignInForm = () => {

    const onSubmit = (data) => {
        console.log(data)
        reset()
    }

    const { register, handleSubmit, reset } = useForm()

    return (
        <form onSubmit={handleSubmit(data => onSubmit((data)))}>
            <div><input placeholder="login" type="text" {...register("login")} /></div>
            <div><input placeholder="password" type="text" {...register("password")} /></div>
            <div><input type="checkbox" {...register("rememberMe")} />Remember Me</div>
            <button type="submit">Submit</button>
        </form>
    )
}


export default SignInForm