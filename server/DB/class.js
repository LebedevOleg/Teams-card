module.exports = class Person {
  constructor(
    FIO,
    date,
    citizen,
    adress,
    leader,
    role,
    phone,
    selfEmail,
    workEmail = "",
    dateStartJob,
    salary,
    registr
  ) {
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

module.exports = class Teams {
  constructor(leaderName, team) {
    this.leaderName = leaderName;
    this.Team = team;
  }
};
