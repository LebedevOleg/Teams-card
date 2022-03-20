import React, { useCallback, useEffect, useState } from "react";
import "./comment.css";
import axios from "axios";

const Comment = () => {
  const [text, setText] = useState("");

  const getText = useCallback(async () => {
    await axios
      .post("/api/person/getComments", {
        id: window.location.pathname.split(":")[1],
      })
      .then((res) => {
        setText(res.data);
      });
  }, []);

  const changeTextHandler = (event) => {
    setText(event.target.value);
  };

  const saveComment = async () => {
    await axios
      .post("/api/person/addComment", {
        id: window.location.pathname.split(":")[1],
        text: text,
      })
      .then((res) => {
        window.M.toast("Комментарий успешно сохранен");
      });
  };

  useEffect(() => {
    getText();
  }, [getText]);
  return (
    <div className="commentArea">
      <div class="form__group field">
        <textarea
          type="input"
          class="form__field"
          placeholder="Name"
          name="name"
          id="name"
          defaultValue={text}
          onChange={changeTextHandler}
          style={{ resize: "none" }}
          required
        />
        <label for="name" class="form__label">
          Комментарии...
        </label>
      </div>
      <div className="inputblock">
        <button className="saveButton" onClick={saveComment}>
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default Comment;
