import React from "react";

class Display extends React.Component {
  render() {
    return (
      <div>
        <div className="balls">
          <h1 data-testid="balls-count">{this.props.balls}</h1>
          <h1 data-testid="balls">Balls</h1>
        </div>
        <div className="strikes">
          <h1 data-testid="strikes-count">{this.props.strikes}</h1>
          <h1 data-testid="strikes">Strikes</h1>
        </div>
      </div>
    );
  }
}

export default Display;
