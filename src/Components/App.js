import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";
import Login from "../routes/Login";
import Book from "../routes/Book";
import Join from "../routes/Join";
import Seat from "../routes/Seat";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/login" component={Login} />
        <Route exact path="/book" component={Book} />
        <Route path="/book/seat" component={Seat} />
        <Route path="/join" component={Join} />
      </Switch>
    </Router>
  );
}

export default App;
