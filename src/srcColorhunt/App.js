import React, {Component}from "react";
import shuffle from "lodash.shuffle";
import Timer from "react-compound-timer";
import "./App.css";

import HallOfFame from "./HallOfFame";
import HighScoreInput from "./HighScoreInput";

const colorSet = ["red", "blue", "green", "yellow",
                  "violet", "brown", "orange", "pink", "skyblue"];
const colorSetUseNumber = 3;
const HOF_KEY = "::colorhunt::HallofFame";
const boardsize = 600;
const targetsize = 50;

let item = shuffle(colorSet);

let divStyle1 = {
  backgroundColor: item[0],
  top: Math.floor(Math.random() * (boardsize - targetsize)) + "px",
  left: Math.floor(Math.random() * (boardsize - targetsize)) + "px"
};
let divStyle2 = {
  backgroundColor: item[1],
  top: Math.floor(Math.random() * (boardsize - targetsize)) + "px",
  left: Math.floor(Math.random() * (boardsize - targetsize)) + "px"
};
let divStyle3 = {
  backgroundColor: item[2],
  top: Math.floor(Math.random() * (boardsize - targetsize)) + "px",
  left: Math.floor(Math.random() * (boardsize - targetsize)) + "px"
};

class Colorhunt extends Component{
  constructor(props){
    super(props);
    this.state = {
      score: 0,
      color: item[0].toUpperCase(),
      ds1: divStyle1,
      ds2: divStyle2,
      ds3: divStyle3,
      lose: false,
      points: 0,
      hallOfFame: JSON.parse(localStorage.getItem(HOF_KEY)) || []
    };
  }

  // Arrow fx for binding
  handlePointerEnter = (event) => {
    if(event.target.style.backgroundColor.toUpperCase() !== this.state.color){
      const timeElement = document.getElementsByClassName("time");
      const time = timeElement[0].innerHTML;
      this.setState({lose: true, points: this.state.score * 2 - time});
    }else{
      const newScore = this.state.score + 1;
      item = shuffle(colorSet);
      divStyle1 = {
        backgroundColor: item[0],
        top: Math.floor(Math.random() * (boardsize - targetsize)) + "px",
        left: Math.floor(Math.random() * (boardsize - targetsize)) + "px"
      };
      divStyle2 = {
        backgroundColor: item[1],
        top: Math.floor(Math.random() * (boardsize - targetsize)) + "px",
        left: Math.floor(Math.random() * (boardsize - targetsize)) + "px"
      };
      divStyle3 = {
        backgroundColor: item[2],
        top: Math.floor(Math.random() * (boardsize - targetsize)) + "px",
        left: Math.floor(Math.random() * (boardsize - targetsize)) + "px"
      };
      this.setState({score: newScore, color: item[0].toUpperCase(), ds1: divStyle1, ds2: divStyle2, ds3: divStyle3});
    }
  }

  // Arrow fx for binding
  displayHallOfFame = (hallOfFame) => {
    this.setState({hallOfFame});
  }

  // Arrow fx for binding
  cleanAll = () => {
    this.setState({score: 0, lose: false, points: 0});
  }

  render(){
    const colorSet = item;
    const {score, color, ds1, ds2, ds3, lose, points, hallOfFame} = this.state;
    const style = [ds1, ds2, ds3];

    return (
      <div className="AppColorhunt">

        {lose
          ? (
            <div className="results">
              <p>{"Score final: " + points}</p>
              <HighScoreInput pts={points} onStored={this.displayHallOfFame}/>
              <HallOfFame entries={hallOfFame}/>
              <button onClick={this.cleanAll}>TRY AGAIN</button>
            </div>
          ) : (
            <div className="gameOn">
              <div className="rules">
                <ul>
                  <li>Démarrez la partie en appuyant sur F5</li>
                  <li>Passez le curseur sur la cible dont la couleur correspond à celle écrite au dessus du plateau</li>
                  <li>Ne touchez pas les autres cibles, ce serait synonyme de défaite!</li>
                  <li>Le score dépend du nombre de cibles touchées et du temps écoulé avant la première erreur</li>
                </ul>
              </div>
              <header className="App-header">
                <span className="time"><Timer lastUnit="s"><Timer.Seconds/></Timer></span>
                <span className="color" style={{color: colorSet[Math.floor(Math.random() * colorSetUseNumber)]}}>{color}</span>
                <span className="score">{score}</span>
              </header>
              <div className="App-board">
                <span className="targ first" onPointerEnter={this.handlePointerEnter} style={style[0]}/>
                <span className="targ second" onPointerEnter={this.handlePointerEnter} style={style[1]}/>
                <span className="targ third" onPointerEnter={this.handlePointerEnter} style={style[2]}/>
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default Colorhunt;
