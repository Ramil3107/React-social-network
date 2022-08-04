import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";
import s from "./MyPosts.module.css"
import Post from "./Post/Post"


const MyPosts = (props) => {


    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }


    let onPostChange = (e) => {
        let text = e.target.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }


    let postEl = props.posts.map(post => <Post message={post.message} likecounter={post.likecounter} />)


    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>

            <div className={s.newPost}>
                <div className={s.textArea}>
                    <textarea onChange={onPostChange} value={props.updatedNewPostText} />
                </div>

                <div className={s.button}>
                    <button onClick={addPost}  >Add Post </button>
                </div>
            </div>

            <div className={s.posts}>
                {postEl}
            </div>

        </div>
    )
}

export default MyPosts;