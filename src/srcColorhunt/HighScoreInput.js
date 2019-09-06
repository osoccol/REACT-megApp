import PropTypes from "prop-types";
import React, {Component} from "react";

import "./HighScoreInput.css";

import {saveHOFEntry} from "./HallOfFame";

class HighScoreInput extends Component{

  state = {winner: ""}

  // Arow fx for binding
  handleWinnerUpdate = (event) => {
    this.setState({winner: event.target.value.toUpperCase()});
  }

  // Arow fx for binding
  persistWinner = (event) => {
    event.preventDefault();
    const newEntry = {pts: this.props.pts, player: this.state.winner};
    saveHOFEntry(newEntry, this.props.onStored);
    const form = document.getElementsByTagName("form")[0];
    form.setAttribute("style", "display:none;");
  }

  render(){
    return (
      <form className="highScoreInput" onSubmit={this.persistWinner}>
        <p>
          <label>
            Entre ton prénom :
            <input
              autoComplete="given-name"
              onChange={this.handleWinnerUpdate}
              type="text"
              value={this.state.winner}
            />
          </label>
          <button type="submit">Enregistrer</button>
        </p>
      </form>
    );
  }
}

HighScoreInput.propTypes = {
  pts: PropTypes.number.isRequired,
  onStored: PropTypes.func.isRequired
};

export default HighScoreInput;