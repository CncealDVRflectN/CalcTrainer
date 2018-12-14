import React, { Component } from 'react';
import styled from 'styled-components';

const MenuHeader = styled.h2`
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

class MainMenuPage extends Component {
  render() {
    return (
      <div className="App">
        <MenuHeader>Math trainer</MenuHeader>
        <Button href='/game/decimal'>Decimal game</Button>
        <Button href='/game/binary'>Binary game</Button>
      </div>
    );
  }
}

export default MainMenuPage;