const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"


let initialState = {
        posts: [
            { id: 1, message: "Hi guys, how r u?", likecounter: 11 },
            { id: 2, message: "Props?? What is it?", likecounter: 15 },
            { id: 3, message: "React Kabzda forever", likecounter: 23 },
            { id: 4, message: "Today is tuesday or wednesday?", likecounter: 5 }
        ],
        updatedNewPostText: "my post"
    }

let profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:

            let newPostObject = {
                id: 5,
                message: state.updatedNewPostText,
                likecounter: 8
            }

            state.posts.push(newPostObject)
            state.updatedNewPostText = ""
            return state

        case UPDATE_NEW_POST_TEXT:
            state.updatedNewPostText = action.newText
            return state

        default:
            return state
    }


}


export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer