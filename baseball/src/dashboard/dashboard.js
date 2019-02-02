import React from "react";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <div onClick={this.props.increaseStrikes}>Strike</div>
        <div onClick={this.props.increaseBalls}>Ball</div>
        <div onClick={this.props.increaseStrikes}>Foul</div>
        <div onClick={this.props.hit}>Hit</div>
      </div>
    );
  }
}

export default Dashboard;
