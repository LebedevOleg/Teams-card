import React from "react";
import "./avatar.css";

const Avatar = () => {
  const setAvatarhandler = async (event) => {
    const reader = new FileReader();
    let res = "";

    reader.addEventListener(
      "load",
      async function () {
        try {
          console.log("here");
          res = reader.result;
          document
            .getElementById("profile-pic")
            .setAttribute("src", reader.result);
        } catch (e) {}
        res = reader.result;
      },
      false
    );
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
