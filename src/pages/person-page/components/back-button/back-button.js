import React from "react";
import back_arrow from "./Polygon 37.png";
import "./back-button.css";

const Back_button = () => {
  return (
    <>
      <button className="back-button">
        <img
          src={back_arrow}
          style={{
            position: "relative",
            right: "2%",
            bottom: "25%",
          }}
        />
        Вернуться назад
      </button>
    </>
  );
};

export default Back_button;
