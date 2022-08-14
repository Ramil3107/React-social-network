import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setUserProfile, toggleIsFetching } from "../../redux/profileReducer";
import Profile from "./Profile";


class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

let mapStateToProps = (state) => ({
    userProfile:state.profile.userProfile,
    isFetching:state.profile.isFetching
})


export default connect(mapStateToProps, {setUserProfile,toggleIsFetching})(ProfileContainer);