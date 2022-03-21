let teams = require("../DB/db");
const { Router } = require("express");
const clases = require("../DB/class");

const router = new Router();
// ! api/teams/getTeams
router.get("/getTeamLeader", async (req, res) => {
  const teamsInfo = [];
  teams.teamsArray.map((team) => {
    teamsInfo.push({ leaderName: team.leaderName });
  });

  //console.log(teams.team1);
  return res.status(201).json(teamsInfo);
});

router.post("/getTeams", async (req, res) => {
  teams.teamsArray.map((team) => {
    if (req.body.leaderName === team.leaderName) {
      return res.status(201).json(team.team);
    }
  });
});

router.post("/addNewPerson", async (req, res) => {
  teams.id++;
  let newPerson = new clases.Person(teams.id.toString(), req.body.person.FIO);
  teams.teamsArray.map((team) => {
    if (req.body.leaderName === team.leaderName) {
      team.team.push(newPerson);
      teams.allPerson.push(newPerson);
    }
  });
  return res.status(201).json("correct add");
});

router.post("/addTeam", async (req, res) => {
  let newTeam = new clases.Teams(req.body.leaderName, []);
  teams.teamsArray.push(newTeam);
  return res.status(201).json("correct");
});

module.exports = router;
