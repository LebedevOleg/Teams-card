import React from "react";
import "./avatar.css";

const Avatar = () => {
  const setAvatarhandler = async (event) => {
    let input = document.getElementById("file-upload");
    if (input.files && input.files[0]) {
      console.log("here");
      let reader = new FileReader();
      reader.onload = (e) => {
        document.getElementById("profile-pic").removeAttribute("src");
        document
          .getElementById("profile-pic")
          .setAttribute("src", e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  };

  return (
    <>
      <div className="avatarStyle">
        <img className="profile-pic" id="profile-pic" src="" />
        <div className="upload-button" onClick={setAvatarhandler}>
          <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
        </div>
        <input
          class="file-upload"
          id="file-upload"
          type="file"
          accept="image/*"
        />
      </div>
    </>
  );
};

export default Avatar;
