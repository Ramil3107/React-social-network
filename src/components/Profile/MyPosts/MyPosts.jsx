import React from "react";
import { useForm } from "react-hook-form";
import s from "./MyPosts.module.css"
import Post from "./Post/Post"


const MyPosts = (props) => {

    const { register, handleSubmit, reset } = useForm()

    let onAddPost = (newPost) => {
        props.addPost(newPost)
        reset()
    }



    let postEl = props.posts.map(post => <Post key={post.id} message={post.message} likecounter={post.likecounter} />)


    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>


            <div className={s.newPost}>
                <form onSubmit={handleSubmit((data) => onAddPost(data.post))}>
                    <div className={s.textArea}>
                        <textarea
                            {...register("post")}
                            cols="30"
                            rows="5"
                        />
                    </div>
                    <div className={s.button}>
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>

            <div className={s.posts}>
                {postEl}
            </div>

        </div>
    )
})

export default MyPosts;