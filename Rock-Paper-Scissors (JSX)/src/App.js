/*I spent eight hours on this project, referenced as many of the slides as I could find,
texted fellow students, and dug through as many websites and YouTube videos as I could,
but I was never able to get this to work. I am certain that I have the theory down, but
the score still refuses to change. I even wrote the entire project in HTML and JavaScript
(which did work) just to see if I am missing any ideas, but the JSX still will not work. 
I am attaching the HTML and JavaScript version as well to verify this claim.
Since you do not have office hours, please let me know a good way to discuss this with you,
because none of this is working for me, and not, I feel, from lack of trying. 
*/
import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import {useState} from 'react';

var playerScore = 0;
var compScore = 0;

function rock() {
  var compChoice = Math.ceil(Math.random() * 3);
  console.log(compChoice);

  class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {playerScore: 0};
    }
  }

  if (compChoice == 1) {
    playerScore = playerScore;
    compScore = compScore;

    compChoice = 0;
  }
  if (compChoice == 2) {
    //this.setState({playerScore: playerScore - 1})
    playerScore = playerScore - 1;
    compScore = compScore + 1;

    compChoice = 0;
  }
  if (compChoice == 3) {
    //this.setState({playerScore: playerScore + 1})
    playerScore = playerScore + 1;
    compScore = compScore - 1;

    compChoice = 0;
  }
}

function paper() {
  var compChoice = Math.ceil(Math.random() * 3);
  console.log(compChoice);
  
  if (compChoice == 1) {
    //this.setState({playerScore: playerScore + 1})
    playerScore = playerScore + 1;
    compScore = compScore - 1;

    compChoice = 0;
  }
  if (compChoice == 2) {
    playerScore = playerScore;
    compScore = compScore;

    compChoice = 0;
  }
  if (compChoice == 3) {
    //this.setState({playerScore: playerScore - 1})
    playerScore = playerScore - 1;
    compScore = compScore + 1;

    compChoice = 0;
  }
  
}

function scissors() {
  var compChoice = Math.ceil(Math.random() * 3);
  console.log(compChoice);

  if (compChoice == 1) {
    //this.setState({playerScore: playerScore - 1})
    playerScore = playerScore - 1;
    compScore = compScore + 1;

    compChoice = 0;
  }
  if (compChoice == 2) {
    //this.setState({playerScore: playerScore + 1})
    playerScore = playerScore + 1;
    compScore = compScore - 1;

    compChoice = 0;
  }
  if (compChoice == 3) {
    playerScore = playerScore;
    compScore = compScore;

    compChoice = 0;
  }
}

function playerScoreCalc() {
  return (
    playerScore
  )
}

function compScoreCalc() {
  return (
    compScore
  )
}


export default function App() {
  return (
    <div className="App">
      <h1>Welcome to Rock-Paper-Scissors!</h1>
      <div>
        <div className = "container">
          <div className = "player">
            <div className = "score">{"Player: " + playerScoreCalc()}</div>
            <div className = "playerAction">Action
            </div>
          </div>
          
          <div className = "player">
            <div className = "score">{"Computer: " + compScoreCalc()}</div>
            <div className = "compAction">Action
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className = "buttons" onClick={rock()}>Rock</button>
        <button className = "buttons" onClick={paper()}>Paper</button>
        <button className = "buttons" onClick={scissors()}>Scissors</button>
      </div>
    </div>
  );
}
