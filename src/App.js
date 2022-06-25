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
    const { player, computer } = this.state;
    if (player.score === 5) {
      return "Congratulations! You beat the Computer!"
    } else if (computer.score === 5) {
      return "Oh no! You lost to the Computer!"
    } 
  }

  computerPlay() {
    const rpsArray = ["Rock", "Paper", "Scissors"];
    const computerChoice = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    return computerChoice
  }

  playRound(playerChoice) {
    const { player, computer } = this.state;

    const computerChoice = this.computerPlay();
    let playerScore = player.score;
    let computerScore = computer.score;
    let result = "";
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
      
    this.setState(({ player, computer }) => ({
      player: {
        name: player.name,
        choice: playerChoice,
        score: playerScore
      },
      computer: {
        name: computer.name,
        choice: computerChoice,
        score: computerScore
      },
      resultMessage: result,
    }))
  }

  render() {
    const { player, computer, resultMessage } = this.state;
    return (
      <div className="App">
        {
          player.score === 5 || computer.score === 5 ? 
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
          style={resultMessage.includes("win") ? {color: "#39FF14"} : {color: "white"}}>
          <li>{`Score: ${player.score}`}</li>
          <li className="player-tag">{player.name}</li>
          <li className="player-choice">{player.choice}</li>
        </ul>
        <ul 
          className="computer-data"
          style={resultMessage.includes("lose") ? {color: "#39FF14"} : {color: "white"}}>
          <li>{`Score: ${computer.score}`}</li>
          <li className="player-tag">{computer.name}</li>
          <li className="computer-choice">{computer.choice}</li>
        </ul>
      </div>
      <div className="results">
          <p className="game-message">
          {player.score === 5 || computer.score === 5 ? this.generateEndGameMessage() : resultMessage}</p>
        </div>
    </div>
    );
  }
}

export default App;
