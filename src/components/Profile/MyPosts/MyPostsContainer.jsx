import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


let mapStateToProps = (state) => {
    return (
        {
            updatedNewPostText: state.profile.updatedNewPostText,
            posts: state.profile.posts
        }
    )
}

let mapDispatchToProps = (dispatch) => {
    return (
        {
            postChange: (text) => {
                dispatch(updateNewPostTextActionCreator(text))
            },
            addPost: () => {
                dispatch(addPostActionCreator())
            }
        }
    )
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;