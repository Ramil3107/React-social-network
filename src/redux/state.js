const ADD_POST = "ADD-POST"
const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"


let store = {
    _state: {
        profile: {
            posts: [
                { id: 1, message: "Hi guys, how r u?", likecounter: 11 },
                { id: 2, message: "Props?? What is it?", likecounter: 15 },
                { id: 3, message: "React Kabzda forever", likecounter: 23 },
                { id: 4, message: "Today is tuesday or wednesday?", likecounter: 5 }
            ],
            updatedNewPostText: "my post"
        },
        messages: {
            dialogs: [
                { id: 1, name: "Dmitry" },
                { id: 2, name: "Sasha" },
                { id: 3, name: "Alex" },
                { id: 4, name: "Pavel" }
            ],
            messages: [
                { id: 1, message: "Hi man!" },
                { id: 2, message: "How r u?" },
                { id: 3, message: "My name is Ramil" }
            ],
            updatedNewMessageText: "my message",
        }

    },
    _callSubscriber() {
        console.log("state changed")
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPostObject = {
                id: 5,
                message: this._state.profile.updatedNewPostText,
                likecounter: 8
            }

            this._state.profile.posts.push(newPostObject)
            this._state.profile.updatedNewPostText = ""
            this._callSubscriber(this._state)

        }else if (action.type === ADD_MESSAGE) {
            let newMessageObject = {
                id: 5,
                message: this._state.messages.updatedNewMessageText
            }

            this._state.messages.messages.push(newMessageObject)
            this._state.messages.updatedNewMessageText = ""
            this._callSubscriber(this._state)

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profile.updatedNewPostText = action.newText
            this._callSubscriber(this._state)

        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messages.updatedNewMessageText = action.newText
            this._callSubscriber(this._state)
        }
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }

}

export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export default store