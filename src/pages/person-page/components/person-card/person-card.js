import React, { useState } from "react";
import "./person-card.css";
import axios from "axios";

const Person_card = (data) => {
  const [formPersData, setPersData] = useState({
    id: data.info.id,
    FIO: data.info.FIO,
    date: data.info.date,
    citizen: data.info.citizen,
    adress: data.info.adress,
    leader: data.info.leader,
    role: data.info.role,
    phone: data.info.phone,
    selfEmail: data.info.selfEmail,
    workEmail: data.info.workEmail,
    dateStartJob: data.info.dateStartJob,
    salary: data.info.salary,
    registr: data.info.registr,
  });

  const changePersDataHandler = (event) => {
    setPersData({ ...formPersData, [event.target.name]: event.target.value });
  };
  const savePersonData = async () => {
    await axios
      .post("/api/person/savePersonData", { formPersData })
      .then((res) => {
        console.log(res.data);
      });
  };

  if (data.info.date === undefined) {
    return <></>;
  }
  return (
    <div className="personalInfoBlock">
      <div className="inputblock" style={{ "margin-top": "15px" }}>
        ФИО:
        <input
          className="inputPersonBllock"
          defaultValue={data.info.FIO}
          type="text"
          placeholder="..."
          name="FIO"
          onChange={changePersDataHandler}
        />
      </div>
      <div className="inputblock">
        Дата рождения:
        <input
          className="inputPersonBllock"
          type="date"
          defaultValue={
            data.info.date.split(".")[2] +
            "-" +
            data.info.date.split(".")[1] +
            "-" +
            data.info.date.split(".")[0]
          }
          placeholder="..."
          name="date"
          onChange={changePersDataHandler}
        />
      </div>
      <div className="inputblock">
        Гражданство:
        <input
          className="inputPersonBllock"
          defaultValue={data.info.citizen}
          type="text"
          placeholder="..."
          name="citizen"
          onChange={changePersDataHandler}
        />
      </div>
      <div className="inputblock">
        Адрес проживания:
        <input
          className="inputPersonBllock"
          defaultValue={data.info.adress}
          type="text"
          placeholder="..."
          name="adress"
          onChange={changePersDataHandler}
        />
      </div>
      <div className="inputblock">
        Руководитель группы:
        <input
          className="inputPersonBllock"
          defaultValue={data.info.leader}
          type="text"
          placeholder="..."
          name="leader"
          onChange={changePersDataHandler}
        />
      </div>
      <div className="inputblock">
        Должность:
        <input
          className="inputPersonBllock"
          defaultValue={data.info.role}
          type="text"
          placeholder="..."
          name="role"
          onChange={changePersDataHandler}
        />
      </div>
      <div className="inputblock">
        Телефон:
        <input
          className="inputPersonBllock"
          defaultValue={data.info.phone}
          type="tel"
          placeholder="..."
          name="phone"
          onChange={changePersDataHandler}
        />
      </div>
      <div className="inputblock">
        Почта (личная):
        <input
          className="inputPersonBllock"
          defaultValue={data.info.selfEmail}
          type="email"
          placeholder="..."
          name="selfEmail"
          onChange={changePersDataHandler}
        />
      </div>
      <div className="inputblock">
        Почта (рабочая, если есть):
        <input
          className="inputPersonBllock"
          defaultValue={data.info.workEmail}
          type="email"
          placeholder="..."
          name="workEmail"
          onChange={changePersDataHandler}
        />
      </div>
      <div className="inputblock">
        Дата приема на работу:
        <input
          className="inputPersonBllock"
          defaultValue={
            data.info.dateStartJob.split(".")[2] +
            "-" +
            data.info.dateStartJob.split(".")[1] +
            "-" +
            data.info.dateStartJob.split(".")[0]
          }
          type="date"
          placeholder="..."
          name="dateStartJob"
          onChange={changePersDataHandler}
        />
      </div>
      <div className="inputblock">
        Размер оплаты труда:
        <input
          className="inputPersonBllock"
          defaultValue={data.info.salary}
          type="number"
          placeholder="..."
          name="salary"
          onChange={changePersDataHandler}
        />
      </div>
      <div className="inputblock">
        Оформление:
        <input
          className="inputPersonBllock"
          defaultValue={data.info.registr}
          type="text"
          placeholder="..."
          name="registr"
          onChange={changePersDataHandler}
        />
      </div>
      <div className="inputblock">
        <button className="saveButton" onClick={savePersonData}>
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default Person_card;
