import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setUserProfile, toggleIsFetching } from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Profile from "./Profile";



class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
                this.props.toggleIsFetching(false)
            })
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
    isFetching: state.profile.isFetching
})



export default connect(mapStateToProps, { setUserProfile, toggleIsFetching })(withRouter(ProfileContainer));