import React from "react"
import { useForm } from "react-hook-form"
import Preloader from "../common/Preloader/Preloader"
import styles from "./Login.module.css"



const SignInForm = ({ signIn, captcha, loading }) => {

    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({ mode: "onBlur" })

    const onSubmit = (data) => {
        let { email, password, rememberMe, captcha } = data
        signIn(email, password, rememberMe, captcha)
        reset()
    }

    return (
        <div className={styles.formContainer}>

            {
                loading ?
                    <div style={{backgroundColor:"black"}}>
                        <Preloader />
                    </div>
                    :
                    <form
                        onSubmit={handleSubmit(data => onSubmit((data)))}
                    >

                        <label>
                            Login:
                            <div>
                                <input
                                    placeholder="email"
                                    type="text"
                                    {...register("email", {
                                        required: "Field is required!",
                                        minLength: {
                                            value: 5,
                                            message: "Min length 5 symbols"
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: "Max length 30 symbols"
                                        }
                                    })} />
                            </div>
                        </label>
                        <div
                            style={{ height: 15, color: "red", fontSize: 15 }}>
                            {errors?.email?.message ? errors.email.message : null}
                        </div>


                        <label>
                            Password:
                            <div>
                                <input
                                    placeholder="password"
                                    type="password"
                                    {...register("password", {
                                        required: "Field is required!",
                                        minLength: {
                                            value: 5,
                                            message: "Min length 5 symbols"
                                        },
                                        maxLength: {
                                            value: 30,
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

                        {
                            captcha ?
                                <div>
                                    <img src={captcha} />
                                    <input
                                        placeholder="Enter symbols from image"
                                        type="text"
                                        {...register("captcha", {
                                            required: "Field is required!",
                                        })}
                                    />
                                    {errors?.password?.captcha ? errors.password.captcha : null}
                                </div>
                                :
                                null
                        }
                    </form>
            }


        </div>
    )
}


export default SignInForm