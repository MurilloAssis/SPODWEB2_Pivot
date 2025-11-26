import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Consultas from "./pages/consultas";
import Home from "./pages/home";
import Equipe from "./pages/equipe";

const routing = (
  <Router>
    <div>
      <Switch>
        <Route path="/dashboard" component={Home} />
        <Route path="/consultas" component={Consultas} />
        <Route path="/equipe" component={Equipe} />
        <Route exact patch="/">
          <Redirect to="/dashboard" />
        </Route>
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

reportWebVitals();
