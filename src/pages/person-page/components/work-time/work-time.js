import React, { useState } from "react";
import "./work-time.css";
import pounds from "./pounds.png";
import statusImg from "./status.png";

const Work_time = () => {
  const [status, setStatus] = useState(0);

  const ChangeStatusHandler = async (event) => {
    setStatus(parseInt(event.target.value));
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
            <input class="inputForm" placeholder="Введите текст..."></input>
          </td>
          <td>
            <input class="inputForm" placeholder="Введите текст..."></input>
          </td>
          <td>
            <input class="inputForm" placeholder="Введите текст..."></input>
          </td>
          <td>
            <input
              class="inputForm"
              type="datetime-local"
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
            <select id="status" onChange={ChangeStatusHandler} defaultValue="0">
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
