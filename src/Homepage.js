import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Homepage.css'

import mem from './memory.PNG';
import todo from './todolist.PNG';
import color from './colorhunt.PNG';
import hang from './hangman.PNG';

class Home extends Component {
  render() {
    return(
      <div className="board2x2">
        <Link to="/memory"><img src={mem} alt="" title="Jeu de memory" id="mem"></img></Link>
        <Link to="/todoList"><img src={todo} alt="" title="TODO List" id="todo"></img></Link>
        <Link to="/colorhunt"><img src={color} alt="" title="Color Hunt" id="color"></img></Link>
        <Link to="/hangman"><img src={hang} alt="" title="Jeu du Pendu" id="hangman"></img></Link>
      </div>
    )
  }
}
export default Home