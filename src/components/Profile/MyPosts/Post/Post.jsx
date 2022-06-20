import React from "react";
import s from "./Post.module.css"


const Post = () => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://www.shareicon.net/data/512x512/2016/09/01/822711_user_512x512.png" />
                Post
               <div><span>Like</span></div>

            </div>
        </div>
    )
}

export default Post;