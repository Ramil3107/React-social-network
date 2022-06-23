import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post"


const MyPosts = () => {

    let posts = [
        { id: 1, message: "Hi guys, how r u?", likecounter:11},
        { id: 2, message: "Props?? What is it?", likecounter:15 },
        { id: 3, message: "React Kabzda forever", likecounter:23 },
        { id: 4, message: "Today is tuesday or wednesday?", likecounter:5 }
    ]
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
                <Post message={posts[0].message} likecounter={posts[0].likecounter} />
                <Post message={posts[1].message} likecounter={posts[1].likecounter} />
                <Post message={posts[2].message} likecounter={posts[2].likecounter} />
                <Post message={posts[3].message} likecounter={posts[3].likecounter} />
            </div>

        </div>
    )
}

export default MyPosts;