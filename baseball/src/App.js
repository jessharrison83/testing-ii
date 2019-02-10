import React, { Component } from "react";
import Display from "./display/display.js";
import Dashboard from "./dashboard/dashboard.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      balls: 0,
      strikes: 0,
      fouls: 0
    };
  }
  reset = () => {
    this.setState({
      balls: 0,
      strikes: 0,
      fouls: 0
    });
  };
  increaseBalls = () => {
    const balls = this.state.balls;
    if (balls < 3) {
      this.setState({
        balls: balls + 1
      });
    } else {
      window.alert("WALK!");
      this.reset();
    }
  };
  increaseFouls = () => {
    const fouls = this.state.fouls;
    if (fouls < 2) {
      this.setState({
        fouls: fouls + 1
      });
    } else {
      window.alert("YOU'RE OUT!");
      this.reset();
    }
  };
  increaseStrikes = () => {
    const strikes = this.state.strikes;
    if (strikes < 2) {
      this.setState({
        strikes: strikes + 1
      });
    } else {
      window.alert("YOU'RE OUT!");
      this.reset();
    }
  };
  hit = () => {
    window.alert("HOME RUN!");
    this.reset();
  };
  render() {
    return (
      <div>
        <Display
          strikes={this.state.strikes}
          balls={this.state.balls}
          fouls={this.state.fouls}
        />
        <Dashboard
          increaseStrikes={this.increaseStrikes}
          reset={this.reset}
          increaseBalls={this.increaseBalls}
          hit={this.hit}
          increaseFouls={this.increaseFouls}
        />
      </div>
    );
  }
}

export default App;
