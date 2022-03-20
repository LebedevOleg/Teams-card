module.exports.Person = class Person {
  constructor(
    id,
    FIO,
    date = "",
    citizen = "",
    adress = "",
    leader = "",
    role = "",
    phone = "",
    selfEmail = "",
    workEmail = "",
    dateStartJob = "",
    salary = "",
    registr = ""
  ) {
    this.id = id;
    this.FIO = FIO;
    this.date = date;
    this.citizen = citizen;
    this.adress = adress;
    this.leader = leader;
    this.role = role;
    this.phone = phone;
    this.selfEmail = selfEmail;
    this.workEmail = workEmail;
    this.dateStartJob = dateStartJob;
    this.salary = salary;
    this.registr = registr;
  }
};

module.exports.Teams = class Teams {
  constructor(leaderName, team) {
    this.leaderName = leaderName;
    this.team = team;
  }
};

module.exports.Comment = class Comment {
  constructor(id, text) {
    this.id = id;
    this.text = text;
  }
};

module.exports.WorkTime = class WorkTime {
  constructor(id, workID, client, project, stage, deadline, status) {
    this.id = id;
    this.workID = workID;
    this.client = client;
    this.project = project;
    this.stage = stage;
    this.deadline = deadline;
    this.status = status;
  }
};
