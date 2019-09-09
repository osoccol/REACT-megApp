import React, {Component} from "react";
import "./App.css";
import {BrowserRouter, Link, Route, Switch, Redirect} from "react-router-dom";

import Home from "./Homepage";
import Memory from "./srcMemory/App";
import TodoList from "./srcTodolist/App";
import Hangman from "./srcHangman/App";
import Colorhunt from "./srcColorhunt/App";

class App extends Component{

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <div className="menu">
            <ul>
              <li><Link to="/home" onClick={this.handleChange}>Homepage</Link></li>
              <li><Link to="/memory" onClick={this.handleChange}>Memory</Link></li>
              <li><Link to="/hangman" onClick={this.handleChange}>Hangman</Link></li>
              <li><Link to="/colorhunt" onClick={this.handleChange}>Colorhunt</Link></li>
              <li><Link to="/todoList" onClick={this.handleChange}>TodoList</Link></li>
            </ul>
          </div>
          <div className="board">
            <Switch>
              <Route path="/home" component={Home}/>
              <Route path="/memory" component={Memory}/>
              <Route path="/colorhunt" component={Colorhunt}/>
              <Route path="/hangman" component={Hangman}/>
              <Route path="/todolist" component={TodoList}/>
            </Switch>
            <Redirect to="/home"/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;