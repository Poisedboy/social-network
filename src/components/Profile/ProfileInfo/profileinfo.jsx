import React from "react";
import i from './profileinfo.module.css';
import Preloader from './../../Common/Preloader/Preloader.js';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from './../../Image/1.png'

const ProfileInfo = (props, isOwner) => {
  if(!props.profile) {
    return <Preloader />
  };

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    };
  };


  return (
    <div>
      <div className={i.descriptionBlock}>
        <img src={props.profile.photos.large || userPhoto} alt="ava" className={i.avatarSize} />
        {isOwner &&
          <div>
            <input type={'file'} onChange={onMainPhotoSelected} />
          </div>
        }
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        <p>FrontEnd Dev(ReactJS + Redux)</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
