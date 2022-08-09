import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogReducer";
import Dialog from "./Dialog";
import React from "react";
import { connect } from "react-redux";



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