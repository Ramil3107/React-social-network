import React from "react";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Profile from "./Profile";
import { WithAuthRedirect } from "../../hoc/WithRedirect";



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


let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)
let WithRouterComponent = withRouter(AuthRedirectComponent)


export default connect(mapStateToProps, { getUserProfile })(WithRouterComponent);