import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import mem from './memory.PNG';
import todo from './todolist.PNG';
import color from './colorhunt.PNG';
import hang from './hangman.PNG';
import Memory from './srcMemory/App';
import TodoList from './srcTodolist/App';
import Hangman from './srcHangman/App';
import Colorhunt from './srcColorhunt/App'

class App extends Component {

  state = {
    homepage: true,
  }

  handleChange = () => {
    var homepagePath = window.location.pathname === '/';
    this.setState({homepage: homepagePath});
  }

  render() {
    const { homepage }  = this.state;

    return (
      <div className="App">
        <div className="menu">
          <ul>
            <li><Link to="/" onClick={this.handleChange}>Homepage</Link></li>
            <li><Link to="/memory" onClick={this.handleChange}>Memory</Link></li>
            <li><Link to="/hangman" onClick={this.handleChange}>Hangman</Link></li>
            <li><Link to="/colorhunt" onClick={this.handleChange}>Colorhunt</Link></li>
            <li><Link to="/todoList" onClick={this.handleChange}>TodoList</Link></li>
          </ul>
        </div>
        {homepage ? 
                  <div className="board">
                    <table>
                      <tbody>
                        <tr>
                          <td><Link to="/memory" onClick={this.handleChange}><img src={mem} alt="" title="Jeu de memory"></img></Link></td>
                          <td><Link to="/todoList" onClick={this.handleChange}><img src={todo} alt="" title="TODO List"></img></Link></td>
                        </tr>
                        <tr>
                          <td><Link to="/colorhunt" onClick={this.handleChange}><img src={color} alt="" title="Color Hunt"></img></Link></td>
                          <td><Link to="/hangman" onClick={this.handleChange}><img src={hang} alt="" title="Jeu du Pendu"></img></Link></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  :
                  <div className="games">
                    <Switch>
                      <Route path="/memory" component={Memory}/>
                      <Route path="/colorhunt" component={Colorhunt}/>
                      <Route path="/hangman" component={Hangman}/>
                      <Route path="/todolist" component={TodoList}/>
                    </Switch>
                  </div>
        }
      </div>
    );
  }
}

export default App;