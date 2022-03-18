import React, { useState } from "react";
import "./team-list.css";
import arrow from "./Group 729.png";

const Team_list = () => {
  const [state, setState] = useState(false);

  const ChangeSetHandler = () => {
    if (!state) {
      setState(true);
    } else {
      setState(false);
    }
  };

  return (
    <div className="team-list-block">
      {state ? (
        <button
          className="team-list-header-selected"
          onClick={ChangeSetHandler}
        >
          Наталья Светличная
        </button>
      ) : (
        <button className="team-list-header" onClick={ChangeSetHandler}>
          Наталья Светличная
        </button>
      )}

      {state ? (
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
      ) : (
        <></>
      )}
    </div>
  );
};

export default Team_list;
