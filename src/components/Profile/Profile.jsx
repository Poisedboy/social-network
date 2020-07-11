import React from "react";
import MyPostsContainer from './MyPosts/myposts-container.jsx';
import ProfileInfo from './ProfileInfo/profileinfo.jsx';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo savePhoto={props.savePhoto}
                    isOnwer={props.isOnwer}
                    profile={props.profile}
                    status={props.status}
                    updateStatus={props.updateStatus} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
