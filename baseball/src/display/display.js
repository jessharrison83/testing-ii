import React from "react";

class Display extends React.Component {
  render() {
    return (
      <div>
        <div className="balls">
          <h1>{this.props.balls}</h1>
          <h1>Balls</h1>
        </div>
        <div className="strikes">
          <h1>{this.props.strikes}</h1>
          <h1>Strikes</h1>
        </div>
      </div>
    );
  }
}

export default Display;
