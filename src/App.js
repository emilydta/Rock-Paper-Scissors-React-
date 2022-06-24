import './App.css';
import RpsButton from './components/RpsButton'; 
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      player: {
        name: "Player",
        choice: "",
        score: 0
      },
      computer: {
        name: "Computer",
        choice: "",
        score: 0
      },
      resultMessage: ""
    }
  }

  computerPlay() {
    const rpsArray = ["Rock", "Paper", "Scissors"];
    const computerChoice = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    return computerChoice
  }

  handleState(playerOption) {
    const computerChoice = this.computerPlay();
    const playerWins = (playerOption === "Rock" && computerChoice === "Scissors")
                    || (playerOption === "Paper" && computerChoice === "Rock")
                    || (playerOption === "Scissors" && computerChoice === "Paper");
    let result = "";
    let playerScore = this.state.player.score;
    let computerScore = this.state.computer.score;
    
    if (playerWins) {
      result = `You win! ${playerOption} beats ${computerChoice}!`;
      ++playerScore

    } else if (playerOption === computerChoice) {
      result = "It's a tie!";

    } else {
      result = `You lose! ${computerChoice} beats ${playerOption}!`;
      ++computerScore
    }

    this.setState((prevState) => {
      return {
        player: {
          name: prevState.player.name,
          choice: playerOption,
          score: playerScore
        },
        computer: {
          name: prevState.computer.name,
          choice: computerChoice,
          score: computerScore
        },
        resultMessage: result
      }
    })
  }

  render() {
    return (
      <div className="App">
        <div className="buttons">
          <RpsButton 
            playerOption="Rock" 
            id="rock" 
            onClick={() => this.handleState("Rock")} 
          />
          <RpsButton 
            playerOption="Paper" 
            id="paper" 
            onClick={() => this.handleState("Paper")} 
          />
          <RpsButton 
            playerOption="Scissors" 
            id="scissors" 
            onClick={() => this.handleState("Scissors")} 
          />
        </div>
      <div className="game-data">
        <ul 
          className="player-data" 
          style={this.state.resultMessage.includes("win") ? {color: "#39FF14"} : {color: "white"}}>
          <li className="player-choice">{this.state.player.choice}</li>
          <li>{`Score: ${this.state.player.score}`}</li>
          <li className="player-tag">Player</li>
        </ul>
        <ul 
          className="computer-data"
          style={this.state.resultMessage.includes("lose") ? {color: "#39FF14"} : {color: "white"}}>
          <li className="computer-choice">{this.state.computer.choice}</li>
          <li>{`Score: ${this.state.computer.score}`}</li>
          <li className="player-tag">Computer</li>
        </ul>
      </div>
      <div className="results">
          <p className="result-message">{this.state.resultMessage}</p>
        </div>
    </div>
    );
  }
}

export default App;
