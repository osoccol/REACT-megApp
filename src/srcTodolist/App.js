import React, { Component } from 'react';
import './App.css';
import List from './List';
import cookie from 'react-cookies';

class Todolist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: cookie.load("list") || [],
      };
  }

  handleChange = (event) => {
    const term = event.target.value;
    this.setState({term});
  }
  
  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  }

  handleSubmit = () => {
    if(this.state.term === ""){
      return;
    }
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term],
      }, this.saveCookie);
  }
  
  handleRemove = (index) => {
    const listItems = this.state.items;
    listItems.splice(index, 1);
    this.setState({items: listItems}, this.saveCookie);
  }
  
  saveCookie = () => {
    cookie.save("list", this.state.items);
  }

  render() {
    return (
    <div className="AppTodo">
      <h1>TODO List</h1>
        <div>
          <input value={this.state.term} placeholder="Saisir une tâche" onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
          <button className="add" onClick={this.handleSubmit}></button>
        </div>
        <List items={this.state.items} onRemove={this.handleRemove}/>
    </div>
    );
  }
}

export default Todolist;