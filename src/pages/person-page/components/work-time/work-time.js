import React from "react";
import "./work-time.css";
import pounds from "./pounds.png";
import status from "./status.png";

const Work_time = () => {
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
            <select className="select">
              <option value="0">Нейтральный статус</option>
              <option value="1">В работе</option>
              <option value="2">Завершена</option>
              <option value="3">Отменена</option>
            </select>
          </td>
          <td>
            <input
              class="inputForm"
              type="datetime-local"
              style={{ textAlign: "center" }}
            ></input>
          </td>
          <td>
            <img className="neutralStatus" src={status}></img>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Work_time;
