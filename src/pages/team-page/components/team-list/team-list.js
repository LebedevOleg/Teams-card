import React from "react";
import "./team-list.css";
import arrow from "./Group 729.png";

const Team_list = () => {
  return (
    <>
      <button className="team-list-header"> Наталья Светличная </button>
      <div className="team-list">
        <li className="personal_choose">
          <button
            className="select-person"
            onClick={() => {
              window.location.href = "/person";
            }}
          >
            ФИО <img src={arrow} className="arrow" />
          </button>
        </li>
        <li className="personal_choose">
          <button className="select-person">
            ФИО <img src={arrow} className="arrow" />
          </button>
        </li>
        <li className="personal_choose">
          <button className="select-person">
            ФИО <img src={arrow} className="arrow" />
          </button>
        </li>
        <li className="personal_choose">
          <button className="select-person">
            ФИО <img src={arrow} className="arrow" />
          </button>
        </li>
        <li className="personal_choose">
          <button className="select-person">
            ФИО <img src={arrow} className="arrow" />
          </button>
        </li>
      </div>
    </>
  );
};

export default Team_list;
