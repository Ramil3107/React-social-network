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
    ]
}


let dialogReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: 5, message: action.message }]
            }

        default:
            return state

    }
}


// Action Creators:

export const addMessageActionCreator = (message) => ({ type: ADD_MESSAGE, message })

export default dialogReducer