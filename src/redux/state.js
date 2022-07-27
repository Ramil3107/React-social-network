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
    getState () {
        return this._state
    },
    addPost (){

        let newPostObject = {
            id: 5,
            message: this._state.profile.updatedNewPostText,
            likecounter: 8
        }
    
        this._state.profile.posts.push(newPostObject)
        this._state.profile.updatedNewPostText = ""
        this.callSubscriber(this._state)
    
    },
    callSubscriber (){
        console.log("state changed")
    },
    updateNewPostText (newText) {

        this._state.profile.updatedNewPostText = newText
        this.callSubscriber(this._state)
    },
    subscribe (observer){
        this.callSubscriber = observer
    }

}

export default store