import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import React from "react";


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth == false) return <Navigate to="/login" />

            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirect = connect(mapStateToProps)(RedirectComponent)

    return ConnectedAuthRedirect
}



