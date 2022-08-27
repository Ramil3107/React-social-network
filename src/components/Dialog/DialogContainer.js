import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogReducer";
import Dialog from "./Dialog";
import React from "react";
import { connect } from "react-redux";
import { withAuthRedirect, WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";



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
            addMessage: (message) => {
                dispatch(addMessageActionCreator(message))
            }
        }
    )
}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))
    (Dialog)