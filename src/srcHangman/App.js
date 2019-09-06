import React, {Component} from "react";
import "./App.css";
import shuffle from "lodash.shuffle";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const phrases = ["CHARENTON", "ESSENTIEL", "JEU DU PENDU", "TELEPHONE", "GIRAFE", "MIRAGE", "MARSUPILAMI", "KILLIAN MBAPPE", "ABRARACOURCIX", "OPENCLASSROOMS", "BRAVO"];
let mot = shuffle(phrases)[0]; // select one of the phrases

class Hangman extends Component{
  state = {
    letters: this.displayLetters(alphabet),
    /* guesses: 0,*/
    usedLetters: [],
    masque: this.computeDisplay(mot, [])
  }

  displayLetters(sentence){
    const result = [];
    let indBeg = 0;
    let indEnd = 1;
    while (result.length < sentence.length){
      const letter = sentence.slice(indBeg, indEnd);

      result.push(letter);
      indBeg += 1;
      indEnd += 1;
    }
    return result;
  }

  computeDisplay(phrase, usedLetters){
    return phrase.replace(/\w/g, (letter) => (usedLetters.includes(letter) ? letter : "_"));
  }

  // Arrow fx for binding
  letterClicked = (letter) => {
    const {/* guesses,*/ usedLetters} = this.state;
    letter.target.className = letter.target.className + " clicked";   // Ajoute la classe 'clicked' au bouton
    letter = letter.target.innerHTML;                                 // Associe la lettre cliquee plutot que l'element entier

    // const newGuesses = guesses + 1
    const newUsedLetters = usedLetters.concat(letter);

    this.setState({usedLetters: newUsedLetters, /* guesses: newGuesses,*/ masque: this.computeDisplay(mot, newUsedLetters)});
  }

  // Arrow fx for binding
  clearAll = () => {
    mot = shuffle(phrases)[0];
    this.setState({/* guesses:0,*/ usedLetters: [], masque: this.computeDisplay(mot, []), letters: this.displayLetters(alphabet)});
  }


  render(){
    const {masque, letters/* , guesses */} = this.state;
    const won = !masque.includes("_");

    return (
      <div className="penduApp">
        {/*
    <div className="guesses">
      {guesses}
    </div>
    */}
        <div className="masque">
          {masque.split("").map((masqueLetter, index) => (
            <span className="masqueItem" key={index} index={index} letter={masqueLetter}>
              {masqueLetter}
            </span>
          ))}
        </div>
        {won ? <button className="retry" onClick={this.clearAll}>Recommencer</button>
        : (
          <div className="letters">
            {letters.map((letter, index) => (
              <button className="letter" onClick={this.letterClicked} key={index} index={index} letter={letter}>
                {letter}
              </button>
            ))}
          </div>
        )}

      </div>
    );
  }
}

export default Hangman;
