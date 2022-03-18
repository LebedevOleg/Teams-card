import React from "react";
import "./avatar.css";

const Avatar = () => {
  return (
    <>
      <div className="avatarStyle">
        <img class="profile-pic" src="" />
        <div class="upload-button">
          <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
        </div>
        <input class="file-upload" type="file" accept="image/*" />
      </div>
    </>
  );
};

export default Avatar;
