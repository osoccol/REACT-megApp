import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./Homepage.css";

import mem from "./asset/img/memory.PNG";
import todo from "./asset/img/todolist.PNG";
import color from "./asset/img/colorhunt.PNG";
import hang from "./asset/img/hangman.PNG";

class Home extends Component{
  render(){
    return(
      <div className="board2x2">
        <Link to="/memory"><img src={mem} alt="" title="Jeu de memory" id="mem"/></Link>
        <Link to="/todoList"><img src={todo} alt="" title="TODO List" id="todo"/></Link>
        <Link to="/colorhunt"><img src={color} alt="" title="Color Hunt" id="color"/></Link>
        <Link to="/hangman"><img src={hang} alt="" title="Jeu du Pendu" id="hangman"/></Link>
      </div>
    );
  }
}
export default Home;