import React, { useCallback, useEffect } from "react";
import "./avatar.css";
import axios from "axios";

const Avatar = () => {
  const readURL = async (event) => {
    if (event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = async (e) => {
        document
          .getElementById("profile-pic")
          .setAttribute("src", e.target.result);
        await axios.post("/api/person/addAvatars", {
          id: window.location.pathname.split(":")[1],
          avatar: e.target.result,
        });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  const getAvatar = useCallback(async () => {
    await axios
      .post("/api/person/getAvatars", {
        id: window.location.pathname.split(":")[1],
      })
      .then((res) => {
        document
          .getElementById("profile-pic")
          .setAttribute("src", res.data.avatar);
      });
  }, []);
  useEffect(() => {
    getAvatar();
  }, [getAvatar]);
  return (
    <>
      <div className="avatarStyle">
        <img className="profile-pic" id="profile-pic" src="" />
        <div
          className="upload-button"
          onClick={() => {
            document.getElementById("file-upload").click();
          }}
        >
          <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
        </div>
        <input
          class="file-upload"
          id="file-upload"
          onChange={readURL}
          type="file"
          accept="image/*"
        />
      </div>
    </>
  );
};

export default Avatar;
