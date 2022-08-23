import React from "react"
import { useForm } from "react-hook-form"
import styles from "./Login.module.css"



const SignInForm = () => {

    const onSubmit = (data) => {
        console.log(data)
        reset()
    }

    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({ mode: "onBlur" })

    return (
        <div className={styles.formContainer}>
            <form
                onSubmit={handleSubmit(data => onSubmit((data)))}>

                <label>
                    Login:
                    <div>
                        <input
                            placeholder="login"
                            type="text"
                            {...register("login", {
                                required: "Field is required!",
                                minLength: {
                                    value: 5,
                                    message: "Min length 5 symbols"
                                },
                                maxLength: {
                                    value: 10,
                                    message: "Max length 30 symbols"
                                }
                            })} />
                    </div>
                </label>
                <div
                    style={{ height: 15, color: "red", fontSize: 15 }}>
                    {errors?.login?.message ? errors.login.message : null}
                </div>


                <label>
                    Password:
                    <div>
                        <input 
                        placeholder="password" 
                        type="text" 
                        {...register("password", {
                            required: "Field is required!",
                            minLength: {
                                value: 5,
                                message: "Min length 5 symbols"
                            },
                            maxLength: {
                                value: 20,
                                message: "Max length 30 symbols"
                            }
                        })} />
                    </div>
                </label>
                <div
                    style={{ height: 15, color: "red", fontSize: 15 }}>
                    {errors?.password?.message ? errors.password.message : null}
                </div>

                <div>
                    <input type="checkbox" {...register("rememberMe")} />
                    Remember Me
                </div>
                <input
                    type="submit"
                    disabled={!isValid} />
            </form>
        </div>
    )
}


export default SignInForm