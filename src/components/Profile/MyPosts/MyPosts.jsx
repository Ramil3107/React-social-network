import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post"


const MyPosts = () => {

    let posts = [
        { id: 1, message: "Hi guys, how r u?", likecounter: 11 },
        { id: 2, message: "Props?? What is it?", likecounter: 15 },
        { id: 3, message: "React Kabzda forever", likecounter: 23 },
        { id: 4, message: "Today is tuesday or wednesday?", likecounter: 5 }
    ]

    let postEl = posts.map(post => <Post message={post.message} likecounter={post.likecounter} />)

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
                {postEl}
            </div>

        </div>
    )
}

export default MyPosts;