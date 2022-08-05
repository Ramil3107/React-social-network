const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const ADD_MESSAGE = "ADD-MESSAGE"




let dialogReducer = (state, action) => {
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