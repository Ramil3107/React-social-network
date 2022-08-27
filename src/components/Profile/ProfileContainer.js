import React from "react";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateUserStatus } from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Profile from "./Profile";
import { compose } from "redux";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";




class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.myId
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    onUpdateUserStatus = (status) => {
        this.props.updateUserStatus(status)
    }

    render() {
        let userId = this.props.myId
        if (!userId) {
            return <Preloader />
        }
        if (userId) {
            return <Profile
                {...this.props}
                onUpdateUserStatus={this.onUpdateUserStatus}
            />
        }

    }

}


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

let mapStateToProps = (state) => ({
    userProfile: state.profile.userProfile,
    isFetching: state.profile.isFetching,
    userStatus: state.profile.userStatus,
    isAuth: state.auth.isAuth,
    myId: state.auth.id
})


export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus })
)(ProfileContainer)
