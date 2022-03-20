let teams = require("../DB/db");
const { Router } = require("express");
const clases = require("../DB/class");

const router = new Router();
// ! api/teams/getTeams
router.get("/getTeamLeader", async (req, res) => {
  const teamsInfo = [
    { leaderName: teams.team1.leaderName },
    { leaderName: teams.team2.leaderName },
  ];
  //console.log(teams.team1);
  return res.status(201).json(teamsInfo);
});

router.post("/getTeams", async (req, res) => {
  switch (req.body.leaderName) {
    case "Наталья Светличная":
      return res.status(201).json(teams.team1.team);
      console.log(teams.team1.team);
      break;
    case "Ярослав Жуков":
      return res.status(201).json(teams.team2.team);
      break;
  }
});

router.post("/addNewPerson", async (req, res) => {
  teams.id++;
  let newPerson = new clases.Person(teams.id.toString(), req.body.person.FIO);
  switch (req.body.leaderName) {
    case "Наталья Светличная":
      teams.team1.team.push(newPerson);
      console.log(teams.team1.team);
      break;
    case "Ярослав Жуков":
      teams.team2.team.push(newPerson);
      break;
  }
  return res.status(201).json("correct add");
});

module.exports = router;
