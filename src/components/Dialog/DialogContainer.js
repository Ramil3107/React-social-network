import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogReducer";
import Dialog from "./Dialog";
import React from "react";
import { connect } from "react-redux";
import { WithAuthRedirect } from "../../hoc/WithRedirect";



let mapStateToProps = (state) => {
    return (
        {
            messages: state.messages,
            isAuth: state.auth.isAuth
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

let WithAuthRedirectDialog = WithAuthRedirect(Dialog)

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(WithAuthRedirectDialog)

export default DialogContainer;