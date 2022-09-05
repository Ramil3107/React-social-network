import React from "react";
import s from "./Post.module.css"


const Post = ({ message, likecounter }) => {
    return (
        <div>
            <div className={s.item}>
                <div>
                    <img src="https://www.shareicon.net/data/512x512/2016/09/01/822711_user_512x512.png" />
                    {message}
                </div>

                <div><span>Like {likecounter}</span></div>

            </div>
        </div>
    )
}

export default Post;