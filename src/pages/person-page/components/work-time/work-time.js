import React, { useState } from "react";
import "./work-time.css";
import pounds from "./pounds.png";
import statusImg from "./status.png";
import axios from "axios";

const Work_time = () => {
  const [status, setStatus] = useState(0);
  const [workID, setWorkID] = useState(1);
  const [formWork, setFormWork] = useState({
    id: window.location.pathname.split(":")[1],
    workID: "",
    client: "",
    project: "",
    stage: "",
    deadline: "",
    status: "0",
  });

  const ChangeStatusHandler = async (event) => {
    setStatus(parseInt(event.target.value));
    changeWorkTimeHandler(event);
  };

  const changeWorkTimeHandler = (event) => {
    setFormWork({ ...formWork, [event.target.name]: event.target.value });
    setFormWork({ ...formWork, workID: event.target.id });
    axios.post(" /api/person/addWorkTime", { ...formWork });
  };

  return (
    <div className="tablePlace">
      <table className="employTable">
        <tr>
          <th>
            Клиент <img src={pounds} style={{ margin: "3px" }} />
          </th>
          <th>
            Проект <img src={pounds} style={{ margin: "3px" }} />
          </th>
          <th>
            Этап <img src={pounds} style={{ margin: "3px" }} />
          </th>
          <th>
            Дедлайн <img src={pounds} style={{ margin: "3px" }} />
          </th>
          <th>
            Статус <img src={pounds} style={{ margin: "3px" }} />
          </th>
        </tr>
        <tr>
          <td>
            <input
              class="inputForm"
              name="client"
              id="1"
              placeholder="Введите текст..."
              onChange={changeWorkTimeHandler}
            ></input>
          </td>
          <td>
            <input
              class="inputForm"
              name="project"
              id="1"
              placeholder="Введите текст..."
              onChange={changeWorkTimeHandler}
            ></input>
          </td>
          <td>
            <input
              class="inputForm"
              name="stage"
              placeholder="Введите текст..."
              id="1"
              onChange={changeWorkTimeHandler}
            ></input>
          </td>
          <td>
            <input
              class="inputForm"
              type="datetime-local"
              name="deadline"
              id="1"
              onChange={changeWorkTimeHandler}
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
              id="status"
              name="status"
              onChange={ChangeStatusHandler}
              defaultValue="0"
              id="1"
            >
              <option value="0">В работе</option>
              <option value="1">Завершена</option>
              <option value="2">Отменена</option>
            </select>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Work_time;
