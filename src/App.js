import './App.css';
import RpsButton from './components/RpsButton'; 
import PlayAgainButton from './components/PlayAgainButton';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      player: {
        name: "You",
        choice: "",
        score: 0
      },
      computer: {
        name: "Computer",
        choice: "",
        score: 0
      },
      resultMessage: "",
    }

    this.state = this.initialState
  }

  restartGame() {
    this.setState(this.initialState);
  }

  generateEndGameMessage() {
    if (this.state.player.score === 5) {
      return "Congratulations! You beat the Computer!"
    } else if (this.state.computer.score === 5) {
      return "Oh no! You lost to the Computer!"
    } 
  }

  computerPlay() {
    const rpsArray = ["Rock", "Paper", "Scissors"];
    const computerChoice = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    return computerChoice
  }

  playRound(playerChoice) {
    const computerChoice = this.computerPlay();
      let result = "";
      let playerScore = this.state.player.score;
      let computerScore = this.state.computer.score;

      const playerWins = (playerChoice === "Rock" && computerChoice === "Scissors")
                      || (playerChoice === "Paper" && computerChoice === "Rock")
                      || (playerChoice === "Scissors" && computerChoice === "Paper");
      
      if (playerWins) {
        result = `You win! ${playerChoice} beats ${computerChoice}!`;
        ++playerScore
      } else if (playerChoice === computerChoice) {
        result = "It's a tie!";
      } else {
        result = `You lose! ${computerChoice} beats ${playerChoice}!`;
        ++computerScore
      }
      
    this.setState((prevState) => ({
        player: {
          name: prevState.player.name,
          choice: playerChoice,
          score: playerScore
        },
        computer: {
          name: prevState.computer.name,
          choice: computerChoice,
          score: computerScore
        },
        resultMessage: result,
    }))
  }

  render() {
    return (
      <div className="App">
        {
          this.state.player.score === 5 || this.state.computer.score === 5 ? 
          <PlayAgainButton onClick={() => this.restartGame()}/> : 
          <div className="buttons">
            <RpsButton 
              playerChoice="Rock" 
              id="rock" 
              onClick={() => this.playRound("Rock")} 
            />
            <RpsButton 
              playerChoice="Paper" 
              id="paper" 
              onClick={() => this.playRound("Paper")} 
            />
            <RpsButton 
              playerChoice="Scissors" 
              id="scissors" 
              onClick={() => this.playRound("Scissors")} 
            />
        </div>
        }
      <div className="game-data">
        <ul 
          className="player-data" 
          style={this.state.resultMessage.includes("win") ? {color: "#39FF14"} : {color: "white"}}>
          <li>{`Score: ${this.state.player.score}`}</li>
          <li className="player-tag">{this.state.player.name}</li>
          <li className="player-choice">{this.state.player.choice}</li>
        </ul>
        <ul 
          className="computer-data"
          style={this.state.resultMessage.includes("lose") ? {color: "#39FF14"} : {color: "white"}}>
          <li>{`Score: ${this.state.computer.score}`}</li>
          <li className="player-tag">{this.state.computer.name}</li>
          <li className="computer-choice">{this.state.computer.choice}</li>
        </ul>
      </div>
      <div className="results">
          <p className="game-message">
          {this.state.player.score === 5 || this.state.computer.score === 5 ? this.generateEndGameMessage() : this.state.resultMessage}</p>
        </div>
    </div>
    );
  }
}

export default App;
