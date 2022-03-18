let team1 = require("../DB/db").team1;
let team2 = require("../DB/db").team2;
const Router = require("express");

const router = new Router();

router.post("/getTeams", async (req, res) => {
  const teamsInfo = {
    team1: { leaderName: team1.leaderName, team: team1.Team },
    team2: { leaderName: team2.leaderName, team: team2.Team },
  };
  console.log(teamsInfo);
  return res.status(201).json(teamsInfo);
});

module.exports = router;
