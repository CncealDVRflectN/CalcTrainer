import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DecimalGamePage from './components/DecimalGamePage';
import MainMenuPage from './components/MainMenuPage';
import BinaryGamePage from './components/BinaryGamePage';
import ResultPage from './components/ResultPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={MainMenuPage}/>
          <Route exact path='/game/decimal' component={DecimalGamePage}/>
          <Route exact path='/game/binary' component={BinaryGamePage}/>
          <Route exact path='/result' component={ResultPage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
