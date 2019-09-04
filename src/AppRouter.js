import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  return <h2>Home</h2>;
}

function Todolist() {
  return <h2>Todolist</h2>;
}

function Memory() {
  return <h2>Memory</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todolist/">TODO List</Link>
            </li>
            <li>
              <Link to="/memory/">Memory</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/todolist/" component={Todolist} />
        <Route path="/memory/" component={Memory} />
      </div>
    </Router>
  );
}

export default AppRouter;