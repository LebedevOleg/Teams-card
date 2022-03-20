const Router = require("express");
const personDB = require("../DB/db");

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
  console.log(req.body);
  personDB.allPerson.map((person) => {
    if (person.id == req.body.id) {
      person.FIO = req.body.formPersData.FIO;
      person.adress = req.body.formPersData.adress;
      person.citizen = req.body.formPersData.citizen;
      person.date = req.body.formPersData.date;
      person.dateStartJob = req.body.formPersData.dateStartJob;
      person.leader = req.body.formPersData.leader;
      person.phone = req.body.formPersData.phone;
      person.registr = req.body.formPersData.registr;
      person.role = req.body.formPersData.role;
      person.salary = req.body.formPersData.salary;
      person.selfEmail = req.body.formPersData.selfEmail;
      person.workEmail = req.body.formPersData.workEmail;
    }
    return res.status(201).json(person);
  });
});

module.exports = router;
