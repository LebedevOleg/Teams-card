const Person = require("./class");
const Teams = require("./class");
let person1 = new Person(
  "Фамилия Имя Отчество",
  "21.05.2000",
  "Россия",
  "г.Город, ул.Улица,д.Дом,кв.Квартира",
  "Наталья Светличная",
  "программист",
  "88005553535",
  "email@eamil.com",
  "",
  "21.05.2050",
  "10000",
  "Полная ставка"
);
let person2 = new Person(
  "Фамилия Имя Отчество",
  "22.01.1999",
  "Россия",
  "г.Город, ул.Улица,д.Дом,кв.Квартира",
  "Наталья Светличная",
  "программист",
  "88005553535",
  "email@eamil.com",
  "",
  "21.05.2050",
  "10000",
  "Полная ставка"
);
let person3 = new Person(
  "Фамилия Имя Отчество",
  "10.11.1982",
  "Россия",
  "г.Город, ул.Улица,д.Дом,кв.Квартира",
  "Наталья Светличная",
  "менеджер",
  "88005553535",
  "email@eamil.com",
  "",
  "21.05.2050",
  "10000",
  "Стажировка"
);
let person4 = new Person(
  "Фамилия Имя Отчество",
  "21.05.2000",
  "Россия",
  "г.Город, ул.Улица,д.Дом,кв.Квартира",
  "Наталья Светличная",
  "руководитель проетка",
  "88005553535",
  "email@eamil.com",
  "",
  "10.03.1990",
  "20000",
  "Полная ставка"
);
let group1 = [person1, person3, person4];
let group2 = [person2, person3];
let team1 = new Teams("Наталья Светличная", group1);
let team2 = new Teams("Ярослав Жуков", group2);
module.exports = team1;
module.exports = team2;
