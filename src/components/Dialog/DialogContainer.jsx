import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogReducer";
import Dialog from "./Dialog";
import React from "react";
import { connect } from "react-redux";



// const DialogContainer = (props) => {

//     return <StoreContext.Consumer>
//         {
//             (store) => {
//                 let dispatch = store.dispatch.bind(props.dispatch)
//                 let messages = store.getState().messages


//                 let messageChange = (text) => {
//                     dispatch(updateNewMessageTextActionCreator(text))
//                 }

//                 let addMessage = () => {
//                     dispatch(addMessageActionCreator())
//                 }



//                 return <Dialog messageChange={messageChange} addMessage={addMessage} messages={messages} />
//             }}
//     </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
    return (
        {
            messages: state.messages
        }
    )
}

let mapDispatchToProps = (dispatch) => {
    return (
        {
            addMessage: () => {
                dispatch(addMessageActionCreator())
            },
            messageChange: (text) => {
                dispatch(updateNewMessageTextActionCreator(text))
            }
        }
     )
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)

export default DialogContainer;