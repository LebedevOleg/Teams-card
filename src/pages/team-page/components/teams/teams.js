import React, { useCallback, useEffect, useState } from "react";
import Team_list from "../team-list/team-list";
import "./teams.css";
import axios from "axios";

const Teams = () => {
  const [teams, setTeams] = useState([]);

  const getTeams = useCallback(async () => {
    try {
      await axios.get("/api/teams/getTeams").then(async (res) => {
        console.log(res);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);
  useEffect(() => {
    getTeams();
  }, [getTeams]);
  return (
    <div className="teamPage">
      <h1 className="teams">Команды</h1>
      <button className="team-add-button"> Добавить Команду </button>
      <div>
        <div>
          <Team_list />
        </div>
      </div>
    </div>
  );
};

export default Teams;
