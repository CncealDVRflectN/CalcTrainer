import React, { Component } from 'react';
import styled from 'styled-components';
import DecimalGame from '../logic/DecimalGame';
import isNumber from '../logic/isNumber';
import { connect } from "react-redux";

const Timer = styled.h2`
  color: #D36135;
  font-size: 120px;
`;

const Operand = styled.h3`
  color: #F2E86D;
  font-size: 80px;
`;

const Operator = styled.h3`
  color: #3BC14A;
  font-size: 80px
`;

const Input = styled.input`
  background: transparent;
  border-width: 1px;
  border-style: solid;
  border-color: #EABFCB;
  border-radius: 25px;
  width: 80%;
  font-size: 80px;
  outline: none;
  padding: 0px 10px 0px 10px;
  color: #2D93AD;
`;

class DecimalGamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.game = new DecimalGame();

    this.game.timer.setUpdateCallback(this.handleTimerUpdate);
    this.game.setGameOverCallback(this.handleGameOver);
    this.game.begin();

    console.log(this.props)
  }

  componentDidMount(){
    window.addEventListener('keypress', this.handleEnter);
  }

  componentWillUnmount(){
    window.removeEventListener('keypress', this.handleEnter);
  }

  handleGameOver = () => {
    window.location.replace('/result');
  }

  handleInput = (event) => {
    if (event.target.value === '' || isNumber(event.target.value)) {
      this.setState({value: event.target.value});
    }
  }

  handleSubmition = (event) => {
    if (this.game.checkAnswer(parseInt(this.state.value))) {
      this.setState({value: ''});
    };
  }

  handleEnter = (event) => {
    if(event.keyCode === 13){
      this.handleSubmition();
    }
  }

  handleTimerUpdate = () => {
    this.setState({value: this.state.value});
  }

  render() {
    return (
      <div className="App">
        <Timer>{this.game.timer.getTimeString()}</Timer>
        <Operand>{this.game.currentResult}</Operand>
        <Operator>{this.game.operator}</Operator>
        <Operand>{this.game.nextOperand}</Operand>
        <Operator>=</Operator>
        <Input type="text" value={this.state.value} onChange={this.handleInput}/>
      </div>
    );
  }
}


export default DecimalGamePage;
// move !!!!!
// const mapStateToProps = (state) => ({
//   score: state.scoreState,
// });

// const setScore = (score) => ({
//   type: 'SET_SCORE_STATE',
//   payload: score,
// });

// export default connect(mapStateToProps, { setScore })(DecimalGamePage);
