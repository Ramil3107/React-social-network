import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post"


const MyPosts = (props) => {

    let addPostBtn = React.createRef()
    let addPostText = React.createRef()


    let addPost = () => {
         props.addPost(addPostText.current.value)
    }
    

    let postEl = props.posts.map(post => <Post message={post.message} likecounter={post.likecounter} />)

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>

            <div className={s.newPost}>
                <div className={s.textArea}>
                    <textarea ref={addPostText}></textarea>
                </div>

                <div className={s.button}>
                    <button ref={addPostBtn} onClick={addPost}>Add Post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postEl}
            </div>

        </div>
    )
}

export default MyPosts;