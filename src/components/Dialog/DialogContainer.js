import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogReducer";
import Dialog from "./Dialog";
import React from "react";
import { connect } from "react-redux";
import { WithAuthRedirect } from "../../hoc/withRedirect";
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
            addMessage: () => {
                dispatch(addMessageActionCreator())
            },
            messageChange: (text) => {
                dispatch(updateNewMessageTextActionCreator(text))
            }
        }
    )
}


export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))
    (Dialog)