import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


let mapStateToProps = (state) => {
    return (
        {
            posts: state.profile.posts
        }
    )
}

let mapDispatchToProps = (dispatch) => {
    return (
        {
            addPost: (newPost) => {
                dispatch(addPostActionCreator(newPost))
            }
        }
    )
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;