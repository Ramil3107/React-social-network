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
            ]
        }

    },
    _callSubscriber() {
        console.log("state changed")
    },


    // addPost() {

    //     let newPostObject = {
    //         id: 5,
    //         message: this._state.profile.updatedNewPostText,
    //         likecounter: 8
    //     }

    //     this._state.profile.posts.push(newPostObject)
    //     this._state.profile.updatedNewPostText = ""
    //     this._callSubscriber(this._state)

    // },
    // updateNewPostText(newText) {

    //     this._state.profile.updatedNewPostText = newText
    //     this._callSubscriber(this._state)
    // },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPostObject = {
                id: 5,
                message: this._state.profile.updatedNewPostText,
                likecounter: 8
            }

            this._state.profile.posts.push(newPostObject)
            this._state.profile.updatedNewPostText = ""
            this._callSubscriber(this._state)
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profile.updatedNewPostText = action.newText
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

export default store