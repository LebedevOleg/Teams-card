import React, { useCallback, useState } from "react";
import axios from "axios";
import statusImg from "../work-time/status.png";

const WorkTimeCard = (data) => {
  const [status, setStatus] = useState(0);
  const [client, setClient] = useState("");
  const [project, setProject] = useState("");
  const [stage, setStage] = useState("");
  const [deadline, setdeadline] = useState("");
  if (data.props != undefined) {
    setClient(data.props.client);
    setStatus(data.props.status);
    setProject(data.props.project);
    setStage(data.props.stage);
    setdeadline(data.props.deadline);
  }

  const ChangeStatusHandler = async (event) => {
    setStatus(parseInt(event.target.value));
    changeWorkTimeHandler(event);
  };
  const changeWorkTimeHandler = async (event) => {
    switch (event.target.name) {
      case "client":
        setClient(event.target.value);
        break;
      case "project":
        setProject(event.target.value);
        break;
      case "stage":
        setStage(event.target.value);
        break;
      case "deadline":
        setdeadline(event.target.value);
        break;
    }
  };

  const saveInfo = (event) => {
    let saveData = {
      id: window.location.pathname.split(":")[1],
      workID: event.target.id,
      client: client,
      project: project,
      stage: stage,
      deadline: deadline,
      status: status,
    };
    axios.post(" /api/person/addWorkTime", {
      ...saveData,
    });
  };
  return (
    <tr>
      <td>
        <input
          className="inputForm"
          name="client"
          id="1"
          placeholder="Введите текст..."
          onChange={changeWorkTimeHandler}
          onBlur={saveInfo}
        ></input>
      </td>
      <td>
        <input
          className="inputForm"
          name="project"
          id="1"
          placeholder="Введите текст..."
          onChange={changeWorkTimeHandler}
          onBlur={saveInfo}
        ></input>
      </td>
      <td>
        <input
          className="inputForm"
          name="stage"
          placeholder="Введите текст..."
          id="1"
          onChange={changeWorkTimeHandler}
          onBlur={saveInfo}
        ></input>
      </td>
      <td>
        <input
          className="inputForm"
          type="datetime-local"
          name="deadline"
          id="1"
          onChange={changeWorkTimeHandler}
          onBlur={saveInfo}
          style={{ textAlign: "center" }}
        ></input>
      </td>
      <td>
        {status === 0 ? (
          <img className="positiveStatus" src={statusImg}></img>
        ) : status === 1 ? (
          <img className="negativeStatus" src={statusImg}></img>
        ) : status === 2 ? (
          <img className="neutralStatus" src={statusImg}></img>
        ) : (
          <></>
        )}
        <select
          id="1"
          name="status"
          className="status"
          onChange={ChangeStatusHandler}
          onBlur={saveInfo}
          defaultValue="0"
        >
          <option value="0">В работе</option>
          <option value="1">Завершена</option>
          <option value="2">Отменена</option>
        </select>
      </td>
    </tr>
  );
};

export default WorkTimeCard;
