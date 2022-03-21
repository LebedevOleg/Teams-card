import React, { useCallback, useState } from "react";
import axios from "axios";
import statusImg from "../work-time/status.png";

const WorkTimeCard = (data) => {
  const [status, setStatus] = useState(
    data.props != undefined ? data.props.status : 0
  );
  const [client, setClient] = useState("");
  const [project, setProject] = useState("");
  const [stage, setStage] = useState("");
  const [deadline, setdeadline] = useState("");

  const ChangeStatusHandler = async (event) => {
    setStatus(parseInt(event.target.value));
    changeWorkTimeHandler(event);
  };
  const changeWorkTimeHandler = (event) => {
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

  const saveInfo = () => {
    let saveData = {
      id: window.location.pathname.split(":")[1],
      workID: data.id,
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
          id={data.id}
          placeholder="Введите текст..."
          onChange={changeWorkTimeHandler}
          onBlur={saveInfo}
          defaultValue={data.props != undefined ? data.props.client : ""}
        ></input>
      </td>
      <td>
        <input
          className="inputForm"
          name="project"
          id={data.id}
          placeholder="Введите текст..."
          onChange={changeWorkTimeHandler}
          onBlur={saveInfo}
          defaultValue={data.props != undefined ? data.props.project : ""}
        ></input>
      </td>
      <td>
        <input
          className="inputForm"
          name="stage"
          placeholder="Введите текст..."
          id={data.id}
          onChange={changeWorkTimeHandler}
          onBlur={saveInfo}
          defaultValue={data.props != undefined ? data.props.stage : ""}
        ></input>
      </td>
      <td>
        <input
          className="inputForm"
          type="datetime-local"
          name="deadline"
          id={data.id}
          onChange={changeWorkTimeHandler}
          onBlur={saveInfo}
          defaultValue={data.props != undefined ? data.props.deadline : ""}
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
          id={data.id}
          name="status"
          className="status"
          onChange={ChangeStatusHandler}
          onBlur={saveInfo}
          defaultValue={data.props != undefined ? data.props.status : ""}
          onLoad={ChangeStatusHandler}
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
