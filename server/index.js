const express = require("express");
const teamsRoute = require("./routes/teams.route");
const personRoute = require("./routes/person.route");
const CreateDB = require("./DB/db");

const port = 5000;

const server = express();
server.use(express.json({ extended: true }));
server.use("/api/teams", teamsRoute);
server.use("/api/person", personRoute);
server.get("/", (request, response) => {
  response.send("Hello from Express!");
});

server.listen(port, () =>
  console.log(`server has been started!!!!!! on port ${port}`)
);
