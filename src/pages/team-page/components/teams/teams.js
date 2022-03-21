import React, { useCallback, useEffect, useState } from "react";
import Team_list from "../team-list/team-list";
import "./teams.css";
import axios from "axios";

const Teams = () => {
  const [teams, setTeams] = useState([]);

  const getTeams = useCallback(async () => {
    try {
      await axios.get("/api/teams/getTeamLeader").then((res) => {
        console.log(res.data);
        setTeams(res.data);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  const addTeam = async () => {
    await axios
      .post("/api/teams/addTeam", {
        leaderName: teamNameText.value,
      })
      .then((res) => {
        console.log("here");
        getTeams();
        modal.style.display = "none";
      });
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      teamNameText.value = "";
      modal.style.display = "none";
    }
  };
  const modal = document.getElementById("addTeamModal");
  const teamNameText = document.getElementById("inputLeaderName");

  useEffect(() => {
    getTeams();
  }, [getTeams]);
  return (
    <div className="teamPage">
      <h1 className="teams">Команды</h1>
      <button
        className="team-add-button"
        onClick={() => {
          modal.style.display = "block";
        }}
      >
        Добавить Команду
      </button>
      <div>
        <div id="addTeamModal" className="modal">
          <div className="modal-content">
            <span
              className="close"
              onClick={() => {
                teamNameText.value = "";
                modal.style.display = "none";
              }}
            >
              &times;
            </span>
            <p>Введите имя Лидера команды:</p>
            <input
              className="inputPersonBlock"
              id="inputLeaderName"
              type="text"
            ></input>
            <button className="team-add-button" onClick={addTeam}>
              Создать команду
            </button>
          </div>
        </div>
        <div>
          {teams.map((team) => (
            <Team_list leaderName={team.leaderName} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
