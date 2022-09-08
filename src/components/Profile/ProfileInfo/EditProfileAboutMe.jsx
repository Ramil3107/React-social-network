import { useForm } from "react-hook-form"
import Preloader from "../../common/Preloader/Preloader"



const EditProfileAboutMe = ({ setEditMode, changeAboutMeInfo, aboutMeLoading, aboutMeError }) => {

    const onSubmitEditedInformation = (data) => {
        changeAboutMeInfo(data, setEditMode)
    }

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: "onBlur" })

    return (
        <>
            {
                aboutMeLoading ?
                    <Preloader />
                    :
                    <form onSubmit={handleSubmit(data => onSubmitEditedInformation((data)))}>
                        <p>
                            <b>Nickname:</b> <input {...register("fullName", {
                                required: "Field is required!",
                                minLength: {
                                    value: 5,
                                    message: "Min length 5 symbols"
                                },
                                maxLength: {
                                    value: 15,
                                    message: "Max length 15 symbols"
                                }
                            })} type="text" />
                            <br />
                            <strong style={{ color: "red" }}>{errors?.fullName?.message ? errors.fullName.message : null}</strong>
                        </p>
                        <p >
                            <b>Looking for a job:</b> <input {...register("lookingForAJob")} type="checkbox" />
                        </p>

                        <p >
                            <b>Professional Skills:</b> <input {...register("lookingForAJobDescription", {
                                required: "Field is required!",
                                minLength: {
                                    value: 5,
                                    message: "Min length 5 symbols"
                                },
                                maxLength: {
                                    value: 50,
                                    message: "Max length 50 symbols"
                                }
                            })} type="text" />
                            <br />
                            <strong style={{ color: "red" }}>
                                {errors?.lookingForAJobDescription?.message ? errors.lookingForAJobDescription.message : null}
                            </strong>

                        </p>
                        <button onClick={() => setEditMode(false)}>Close</button>
                        <input disabled={!isValid} type="submit" />

                        {
                            aboutMeError ?
                                <p>{aboutMeError}</p>
                                :
                                null
                        }
                    </form>
            }
        </>
    )
}



export default EditProfileAboutMe