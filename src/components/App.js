import React, { Component } from 'react';
import Menu from './Menu';
import Game from './Game';

class App extends Component {
  state = {
    current: <Game />
  }
  render() {
    return ( 
      <div>
        { this.state.current }
      </div>
     )
  }
}

export default App;
