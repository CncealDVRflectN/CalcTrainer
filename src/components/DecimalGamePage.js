import React, { Component } from 'react';
import DecimalGame from '../logic/DecimalGame'

class DecimalGamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.game = new DecimalGame();

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmition = this.handleSubmition.bind(this);
    this.handleTimerUpdate = this.handleTimerUpdate.bind(this);

    this.game.timer.setCallback(this.handleTimerUpdate);
    this.game.begin();
  }

  handleInput(event) {
    this.setState({value: event.target.value});
  }

  handleSubmition(event) {
    let result = this.game.checkAnswer(parseInt(this.state.value));
    if (!result) {
      alert("Incorrect");
    } else {
      this.setState({value: ''});
    }
  }

  handleTimerUpdate() {
    this.setState({value: this.state.value});
  }

  render() {
    return (
      <div className="App">
        <b>{this.game.timer.time}</b>
        <div>{this.game.currentResult + this.game.operator + this.game.nextOperand}</div>
        <input type="text" value={this.state.value} onChange={this.handleInput}/>
        <input type="button" value="Try" onClick={this.handleSubmition}/>
      </div>
    );
  }
}

export default DecimalGamePage;