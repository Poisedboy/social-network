import React from "react";
import Profile from './Profile.jsx';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUsersProfile, getStatus, updateStatus, savePhoto } from './../../Redux/profile-reducer';
import { withAuthRedirect } from "../HOC/AuthRedirect.js";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.getUsersProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  };

  componentDidUpdate(prevProps, prevState, snaphot) {
    if(this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }
  
  render() {
    return (
      <Profile {...this.props}
                savePhoto={this.props.savePhoto}
                isOwner={!this.props.match.params.userId}  
                profile={this.props.profile} 
                status={this.props.status}  
                updateStatus={this.props.updateStatus} />
    )
  }
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {getUsersProfile, getStatus, updateStatus, savePhoto}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
