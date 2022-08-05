const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const ADD_MESSAGE = "ADD-MESSAGE"



let initialState = {
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


let dialogReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_NEW_MESSAGE_TEXT:
            state.updatedNewMessageText = action.newText
            return state

        case ADD_MESSAGE:
            let newMessageObject = {
                id: 5,
                message: state.updatedNewMessageText
            }

            state.messages.push(newMessageObject)
            state.updatedNewMessageText = ""
            return state

        default:
            return state
    }
}


export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export default dialogReducer