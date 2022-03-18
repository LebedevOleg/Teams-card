import React, { useState } from "react";
import "./team-list.css";
import SimplePerson from "../simple-person/simple-person";
import arrow from "./Group 729.png";

const Team_list = () => {
  const [state, setState] = useState(false);

  const AddPersonHandler = async () => {
    let teamList = document.getElementById("NP");
    let newPers = document.createElement("li");
    newPers.className = "personal_choose";
    newPers.innerHTML = `<button class="select-person" onClick='window.location.href = "/person:"'>Новый сотрудник <img src=${arrow} class="arrow" /></button>`;
    let parent = document.getElementById("TL");
    parent.insertBefore(newPers, teamList);
  };
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
        <div className="team-list" id="TL">
          <SimplePerson FIO="ФИО" ID="0" />
          <SimplePerson FIO="ФИО" />
          <SimplePerson FIO="ФИО" />
          <SimplePerson FIO="ФИО" />

          <button className="select-person" id="NP" onClick={AddPersonHandler}>
            Добавить сотрудника
            <img src={arrow} className="arrow" />
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Team_list;
