import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Header = styled.h2`
  color: #C191A1;
  font-size: 100px;
  margin: 10% 0% 10% 0%;
`;

const Button = styled.a`
  background: #EABFCB;
  color: #5F0A87;
  border-radius: 15px;
  padding: 10px 20px 10px 20px;
  margin-bottom: 7.5%;
  text-decoration:none;
  font-size: 60px;
`;

class ResultPage extends Component {
  render() {
    console.log(this.props.score)
    return (
      <div className="App">
        <Header>Game over</Header>
        <Button href='/'>Main menu</Button>
      </div>
    );
  }
}

export default connect((state) => ({ score: state.scoreState.score }), {})(ResultPage)
