import React from "react";
import ReactDOM from "react-dom";
import "materialize-css";
import "./index.css";
import Menu from "./components/menu/menu";
import Teams from "./pages/team-page/components/teams/teams";
import Person_page from "./pages/person-page/person-page";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Menu />
      <Route path="/teams" component={Teams} />
      <Route path="/person:id" component={Person_page} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
