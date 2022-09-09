import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { authUser } from "../../redux/authReducer";


class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    id: state.auth.id
})


export default connect(mapStateToProps, { authUser })(HeaderContainer);