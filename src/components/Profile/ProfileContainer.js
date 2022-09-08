import React from "react";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateUserStatus, uploadPhotoThunk } from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Profile from "./Profile";
import { compose } from "redux";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { withRouter } from "../common/withRouter";




class ProfileContainer extends React.Component {

    refreshProfile = () => {
        let userId = this.props.router.params.userId ? this.props.router.params.userId : this.props.myId
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    uploadPhotoHandler = (photo) => {
        this.props.uploadPhotoThunk(photo)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.router.params.userId != prevProps.router.params.userId) {
            this.refreshProfile()
        }
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
                isOwner={!this.props.router.params.userId || this.props.router.params.userId == this.props.myId}
                onUpdateUserStatus={this.onUpdateUserStatus}
                uploadPhotoHandler={this.uploadPhotoHandler}
            />
        }

    }

}

let mapStateToProps = (state) => ({
    userProfile: state.profile.userProfile,
    isFetching: state.profile.isFetching,
    userStatus: state.profile.userStatus,
    photoLoading: state.profile.photoLoading,
    photoUploadError: state.profile.photoUploadError,
    isAuth: state.auth.isAuth,
    myId: state.auth.id,
})


export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, uploadPhotoThunk }))(ProfileContainer)
