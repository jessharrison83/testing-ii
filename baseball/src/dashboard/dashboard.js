import React from "react";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <div onClick={this.props.increaseStrikes} data-testid="strike-button">
          Strike
        </div>
        <div onClick={this.props.increaseBalls} data-testid="ball-button">
          Ball
        </div>
        <div onClick={this.props.increaseStrikes} data-testid="foul-button">
          Foul
        </div>
        <div onClick={this.props.hit} data-testid="hit-button">
          Hit
        </div>
      </div>
    );
  }
}

export default Dashboard;
