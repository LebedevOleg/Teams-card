import React, { useCallback, useEffect, useState } from "react";
import Avatar from "./components/avatar/avatar";
import Back_button from "./components/back-button/back-button";
import Comment from "./components/comment/comment";
import Person_card from "./components/person-card/person-card";
import Work_time from "./components/work-time/work-time";
import "./person-page.css";
import axios from "axios";

const Person_page = () => {
  const [person, setPerson] = useState({});

  const takePersonInfo = useCallback(async () => {
    await axios
      .post("api/person/getPerson", {
        id: window.location.pathname.split(":")[1],
      })
      .then((res) => {
        setPerson(res.data);
      });
  }, []);
  useEffect(() => {
    takePersonInfo();
  }, [takePersonInfo]);
  return (
    <>
      <Back_button />
      <div className="personName">{person.FIO}</div>{" "}
      {/*!! исправить на подтягивание с бэка */}
      <div className="cardHeadBlock">
        <text className="cardHeadText">Карточка сотрудника</text>
      </div>
      <Avatar />
      {person.date === undefined ? <></> : <Person_card info={person} />}
      <div className="commentWorkPlace">
        <Comment />
        <div className="employmentHeadBlock">
          <text className="employmentHeadText">Занятость сотрудника</text>
        </div>
      </div>
      <Work_time />
    </>
  );
};

export default Person_page;
