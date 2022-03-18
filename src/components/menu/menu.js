import React, { useCallback, useEffect, useState } from "react";
import "./menu.css";
import logo from "./logo.png";
import pending from "./outline_pending_black_24dp.png";
import { Link } from "react-router-dom";

const Menu = () => {
  const checkPerson = useCallback(() => {
    if (window.location.pathname.split(":")[0] === "/person") {
      return true;
    } else {
      return false;
    }
  }, []);
  useEffect(() => {
    checkPerson();
  }, [checkPerson]);
  return (
    <>
      <div className="menu">
        <img className="logo" src={logo} />
        <img className="pending" src={pending} />{" "}
        <ul className="menu-list">
          <li className="menu_choose_off">
            <button
              className="menu-button"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Главная
            </button>
          </li>
          <li className="menu_choose_off">
            <button
              className="menu-button"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Мои задачи
            </button>
          </li>
          <li className="menu_choose_off">
            <button
              className="menu-button"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              История изменений
            </button>
          </li>
          {window.location.pathname === "/teams" ? (
            <li className="menu_choose_on">
              <button
                className="menu-button-selected"
                onClick={() => {
                  window.location.href = "/teams";
                }}
              >
                Команды
              </button>
            </li>
          ) : (
            <li className="menu_choose_off">
              <button
                className="menu-button"
                onClick={() => {
                  window.location.href = "/teams";
                }}
              >
                Команды
              </button>
            </li>
          )}
          {checkPerson() ? (
            <li className="menu_choose_on">
              <button
                className="menu-button-selected"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Настройки
              </button>
            </li>
          ) : (
            <li className="menu_choose_off">
              <button
                className="menu-button"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Настройки
              </button>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Menu;
