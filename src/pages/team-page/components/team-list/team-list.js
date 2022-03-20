import React, { useState, useCallback, useEffect } from "react";
import "./team-list.css";
import SimplePerson from "../simple-person/simple-person";
import arrow from "./Group 729.png";
import axios from "axios";

const Team_list = (data) => {
  const [state, setState] = useState(false);
  const [team, setTeam] = useState([]);
  console.log(data);
  const getTeams = useCallback(async () => {
    try {
      await axios
        .post("/api/teams/getTeams", { leaderName: data.leaderName })
        .then((res) => {
          console.log(res.data);
          setTeam(res.data);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);
  useEffect(() => {
    getTeams();
  }, [getTeams]);

  const AddPersonHandler = async () => {
    let newPerson = { FIO: "Новый пользователь" };
    await axios
      .post("api/teams/addNewPerson", {
        leaderName: data.leaderName,
        person: newPerson,
      })
      .then(async (res) => {
        //#region add element on html
        let teamList = document.getElementById("NP");
        let newPers = document.createElement("li");
        newPers.className = "personal_choose";
        newPers.innerHTML = `<button class="select-person" onClick='window.location.href = "/person:"'>Новый сотрудник <img src=${arrow} class="arrow" /></button>`;
        let parent = document.getElementById("TL");
        parent.insertBefore(newPers, teamList);
        //#endregion
      });
    getTeams();
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
          {data.leaderName}
        </button>
      ) : (
        <button className="team-list-header" onClick={ChangeSetHandler}>
          {data.leaderName}
        </button>
      )}
      {state ? (
        <div className="team-list" id="TL">
          {team.map((pers) => (
            <SimplePerson FIO={pers.FIO} id={pers.id} />
          ))}
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
