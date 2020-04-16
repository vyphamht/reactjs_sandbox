import React, { Component } from "react";
import "./App.css";
import Circle from "./Circle/Circle";
import Gameover from "./Gameover/Gameover";

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
  state = {
    score: 0,
    current: 0,
    showGameOver: false,
    rounds: 0,
  };

  pace = 1500;
  timer = undefined;

  next = () => {
    if (this.state.rounds >= 2) {
      this.endHandler();
    }
    let nextActive = undefined;
    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);
    this.setState({
      current: nextActive,
      rounds: this.state.rounds + 1,
    });
    this.timer = setTimeout(this.next, this.pace);
    console.log("active circle is " + this.state.current);
  };

  clickHandler = (circleID) => {
    let audio = new Audio("/snd_se_pokemon_heavy_step.wav");
    console.log("I was clicked - ", circleID);
    if (this.state.current !== circleID) {
      this.endHandler();
      return;
    }
    audio.play();
    this.setState({
      score: this.state.score + 1,
      rounds: 0,
    });
    this.pace *= 0.95;
  };

  startHandler = () => {
    let audio = new Audio("/snd_se_pokemon_dedenne_jump.wav");
    audio.play();
    this.next();
  };
  endHandler = () => {
    let audio = new Audio("/snd_se_pokemon_zoroark_vc.wav");
    audio.play();
    clearTimeout(this.timer);
    this.setState({
      showGameOver: true,
    });
  };
  render() {
    return (
      <div>
        <h1>SMASH GAME</h1>
        <p>Your current score is: {this.state.score} </p>
        <main>
          <Circle
            active={this.state.current === 1}
            buttonColor="yellow"
            circleClicked={this.clickHandler.bind(this, 1)}
          />
          <Circle
            active={this.state.current === 2}
            buttonColor="green"
            circleClicked={this.clickHandler.bind(this, 2)}
          />
          <Circle
            active={this.state.current === 3}
            buttonColor="blue"
            circleClicked={this.clickHandler.bind(this, 3)}
          />
          <Circle
            active={this.state.current === 4}
            buttonColor="red"
            circleClicked={this.clickHandler.bind(this, 4)}
          />
        </main>
        <button onClick={this.startHandler}>START</button>
        <button onClick={this.endHandler}>END GAME</button>
        <div>
          {this.state.showGameOver && <Gameover score={this.state.score} />}
        </div>
      </div>
    );
  }
}

export default App;
