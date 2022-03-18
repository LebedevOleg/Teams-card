import React from "react";
import "./person-card.css";

const Person_card = () => {
  return (
    <div className="personalInfoBlock">
      <div className="inputblock" style={{ "margin-top": "15px" }}>
        ФИО:
        <input className="inputPersonBllock" type="text" placeholder="..." />
      </div>
      <div className="inputblock">
        Дата рождения:
        <input className="inputPersonBllock" type="date" placeholder="..." />
      </div>
      <div className="inputblock">
        Гражданство:
        <input className="inputPersonBllock" type="text" placeholder="..." />
      </div>
      <div className="inputblock">
        Адрес проживания:
        <input className="inputPersonBllock" type="text" placeholder="..." />
      </div>
      <div className="inputblock">
        Руководитель группы:
        <input className="inputPersonBllock" type="text" placeholder="..." />
      </div>
      <div className="inputblock">
        Должность:
        <input className="inputPersonBllock" type="text" placeholder="..." />
      </div>
      <div className="inputblock">
        Телефон:
        <input className="inputPersonBllock" type="tel" placeholder="..." />
      </div>
      <div className="inputblock">
        Почта (личная):
        <input className="inputPersonBllock" type="email" placeholder="..." />
      </div>
      <div className="inputblock">
        Почта (рабочая, если есть):
        <input className="inputPersonBllock" type="email" placeholder="..." />
      </div>
      <div className="inputblock">
        Дата приема на работу:
        <input className="inputPersonBllock" type="date" placeholder="..." />
      </div>
      <div className="inputblock">
        Размер оплаты труда:
        <input className="inputPersonBllock" type="number" placeholder="..." />
      </div>
      <div className="inputblock">
        Оформление:
        <input className="inputPersonBllock" type="text" placeholder="..." />
      </div>
      <div className="inputblock">
        <button className="saveButton">Сохранить</button>
      </div>
    </div>
  );
};

export default Person_card;
