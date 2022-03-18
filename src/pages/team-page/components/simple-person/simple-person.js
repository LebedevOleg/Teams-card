import React from "react";
import "./simple-person.css";
import arrow from "../team-list/Group 729.png";

const SimplePerson = (data) => {
  return (
    <li className="personal_choose">
      <button
        className="select-person"
        onClick={() => {
          window.location.href = "/person:" + data.ID;
        }}
      >
        {data.FIO} <img src={arrow} className="arrow" />
      </button>
    </li>
  );
};

export default SimplePerson;
