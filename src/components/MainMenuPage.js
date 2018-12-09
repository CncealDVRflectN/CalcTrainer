import React, { Component } from 'react';

class MainMenuPage extends Component {
  render() {
    return (
      <div className="App">
        <h1>Menu</h1>
        <h3><a href='/game/decimal'>Decimal game</a></h3>
        <h3><a href='/game/binary'>Binary game</a></h3>
        <h3><a href='/settings'>Settings</a></h3>
      </div>
    );
  }
}

export default MainMenuPage;