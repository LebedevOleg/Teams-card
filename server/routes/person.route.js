const Router = require("express");
const personDB = require("../DB/db");
const classes = require("../DB/class");

const router = new Router();
// ! /api/person/getPerson
router.post("/getPerson", async (req, res) => {
  personDB.allPerson.map((person) => {
    if (person.id == req.body.id) {
      return res.status(201).json(person);
    }
  });
});

router.post("/savePersonData", async (req, res) => {
  try {
    personDB.allPerson.map((person) => {
      if (person.id == req.body.id) {
        console.log("here");
        person.FIO = req.body.FIO;
        person.adress = req.body.adress;
        person.citizen = req.body.citizen;
        person.date = req.body.date;
        person.dateStartJob = req.body.dateStartJob;
        person.leader = req.body.leader;
        person.phone = req.body.phone;
        person.registr = req.body.registr;
        person.role = req.body.role;
        person.salary = req.body.salary;
        person.selfEmail = req.body.selfEmail;
        person.workEmail = req.body.workEmail;
        return res.status(201).json(person);
      }
    });
  } catch (error) {
    console.log(error.message);
    return res.status(401).json(error);
  }
});

router.post("/getComments", async (req, res) => {
  let text = "";
  personDB.comments.map((comment) => {
    if (comment.id == req.body.id) {
      text = comment.text;
    }
  });
  return res.status(201).json(text);
});

router.post("/addComment", async (req, res) => {
  let comment = new classes.Comment(req.body.id, req.body.text);
  personDB.comments.push(comment);
  return res.status(201).json("");
});

router.post("/addWorkTime", async (req, res) => {
  let check = true;
  console.log(req.body);
  personDB.workTime.map((worktime) => {
    if (worktime.id == req.body.id) {
      if (worktime.workID == req.body.workID) {
        worktime.client = req.body.client;
        worktime.project = req.body.project;
        worktime.stage = req.body.stage;
        worktime.deadline = req.body.deadline;
        worktime.status = req.body.status;
        check = false;
        console.log(personDB.workTime);
        return res.status(201).json(personDB.workTime);
      }
    }
  });
  if (check) {
    let newworktime = new classes.WorkTime(
      req.body.id,
      req.body.workID,
      req.body.client,
      req.body.project,
      req.body.stage,
      req.body.deadline,
      req.body.status
    );
    personDB.workTime.push(newworktime);
    console.log(newworktime);
    return res.status(201).json(personDB.workTime);
  }
});

module.exports = router;
