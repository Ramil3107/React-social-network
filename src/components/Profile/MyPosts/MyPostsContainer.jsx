import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


// const MyPostsContainer = (props) => {

//     return <StoreContext.Consumer>
//         {
//             (store) => {
//                 let state = store.getState()
//                 let dispatch = store.dispatch.bind(props.store)

//                 let addPost = () => {
//                     dispatch(addPostActionCreator())
//                 }


//                 let postChange = (text) => {
//                     dispatch(updateNewPostTextActionCreator(text))
//                 }
//                 return <MyPosts
//                     addPost={addPost}
//                     postChange={postChange}
//                     updatedNewPostText={state.profile.updatedNewPostText}
//                     posts={state.profile.posts} />
//             }}
//     </StoreContext.Consumer>

// }

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