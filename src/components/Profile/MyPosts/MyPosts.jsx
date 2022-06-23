import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post"


const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>

            <div className={s.newPost}>
                <div className={s.textArea}>
                    <textarea></textarea>   
                </div>

                <div className={s.button}>
                    <button>Add Post</button>
                </div>
            </div>

            <div className={s.posts}>
                <Post message="Hi guys, how r u?" likecounter="11" />
                <Post message="Props?? What is it?" likecounter="34" />
                <Post message="React Kabzda forever" likecounter="23" />
                <Post message="Today is tuesday or wednesday?" likecounter="14" />
            </div>

        </div>
    )
}

export default MyPosts;