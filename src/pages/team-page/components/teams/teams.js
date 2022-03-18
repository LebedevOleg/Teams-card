import React from "react";
import Team_list from "../team-list/team-list";
import "./teams.css";

const Teams = () => {
  return (
    <div className="teams">
      <h1>Команды</h1>
      <div className="teams-place">
        <div>
          <Team_list />
        </div>
      </div>
    </div>
  );
};

export default Teams;
