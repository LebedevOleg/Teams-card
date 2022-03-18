import React from "react";
import "./menu.css";
import logo from "./logo.png";
import pending from "./outline_pending_black_24dp.png";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="menu">
        <img className="logo" src={logo} />
        <img className="pending" src={pending} />{" "}
        <ul className="menu-list">
          <li className="menu_choose">
            <button
              className="menu-button"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Главная
            </button>
          </li>
          <li className="menu_choose">
            <button
              className="menu-button"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Мои задачи
            </button>
          </li>
          <li className="menu_choose">
            <button
              className="menu-button"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              История изменений
            </button>
          </li>
          <li className="menu_choose">
            {window.location.pathname === "/teams" ? (
              <button
                className="menu-button-selected"
                onClick={() => {
                  window.location.href = "/teams";
                }}
              >
                Команды
              </button>
            ) : (
              <button
                className="menu-button"
                onClick={() => {
                  window.location.href = "/teams";
                }}
              >
                Команды
              </button>
            )}
          </li>
          <li className="menu_choose">
            <button
              className="menu-button"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Настройки
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
