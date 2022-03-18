import React from "react";
import Team_list from "../team-list/team-list";
import "./teams.css";

const Teams = () => {
  return (
    <div>
      <h1 className="teams">Команды</h1>
      <div>
        <div>
          <Team_list />
        </div>
      </div>
    </div>
  );
};

export default Teams;
