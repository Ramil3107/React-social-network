import React from "react";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Profile from "./Profile";
import { WithAuthRedirect } from "../../hoc/withRedirect";
import { compose } from "redux";



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {

        return (
            <Profile {...this.props} />
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
    isAuth: state.auth.isAuth
})


export default compose(
    WithAuthRedirect,
    withRouter,
    connect(mapStateToProps, { getUserProfile })
)(ProfileContainer)
