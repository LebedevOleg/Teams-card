import React from "react";
import "./comment.css";

const Comment = () => {
  return (
    <div className="commentArea">
      <div class="form__group field">
        <textarea
          type="input"
          class="form__field"
          placeholder="Name"
          name="name"
          id="name"
          style={{ resize: "none" }}
          required
        />
        <label for="name" class="form__label">
          Комментарии...
        </label>
      </div>
      <div className="inputblock">
        <button className="saveButton">Сохранить</button>
      </div>
    </div>
  );
};

export default Comment;
