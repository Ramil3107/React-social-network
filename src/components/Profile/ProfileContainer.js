import React from "react";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateUserStatus } from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Profile from "./Profile";
import { WithAuthRedirect } from "../../hoc/withRedirect";
import { compose } from "redux";



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = 25457
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    onUpdateUserStatus = (status) => {
        this.props.updateUserStatus(status)
    }

    render() {

        return (
            <Profile
                {...this.props}
                onUpdateUserStatus={this.onUpdateUserStatus}
            />
        )
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
    // WithAuthRedirect, 
    withRouter,
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus })
)(ProfileContainer)
