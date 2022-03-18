import React from "react";
import Back_button from "./components/back-button/back-button";
import Comment from "./components/comment/comment";
import Person_card from "./components/person-card/person-card";
import Work_time from "./components/work-time/work-time";
import "./person-page.css";

const Person_page = () => {
  return (
    <>
      <Back_button />
      <div className="personName">Имя сотрудника</div>{" "}
      {/*!! исправить на подтягивание с бэка */}
      <div className="cardHeadBlock">
        <text className="cardHeadText">Карточка сотрудника</text>
      </div>
      <Person_card />
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
