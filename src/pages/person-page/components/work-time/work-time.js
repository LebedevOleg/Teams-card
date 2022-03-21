import React, { useState, useCallback, useEffect } from "react";
import "./work-time.css";
import pounds from "./pounds.png";
import statusImg from "./status.png";
import axios from "axios";
import WorkTimeCard from "../work-time-card/work-time-card";
import { render } from "@testing-library/react";

const Work_time = () => {
  const [workTimeCards, setWorkTimeCards] = useState([]);
  const [load, setLoad] = useState(true);

  const getWorkTime = useCallback(async () => {
    await axios
      .post("/api/person/getWorkTime", {
        id: window.location.pathname.split(":")[1],
      })
      .then((res) => {
        setWorkTimeCards(res.data);
        setLoad(false);
      });
  }, []);

  useEffect(() => {
    getWorkTime();
  }, [getWorkTime]);

  return (
    <div className="tablePlace">
      <table className="employTable">
        <tbody>
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
          {workTimeCards.length === 0 ? (
            <WorkTimeCard props={undefined} id="0" />
          ) : (
            workTimeCards.map((card, index) => (
              <WorkTimeCard props={card} id={index.toString()} />
            ))
          )}
          {workTimeCards.length === 0 ? (
            <></>
          ) : (
            <WorkTimeCard id={workTimeCards.length.toString()} />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Work_time;
