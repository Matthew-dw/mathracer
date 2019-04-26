import React, { Component } from 'react';
import Menu from './Menu';
import Game from './Game';

class App extends Component {
  state = {
    current: 0,
    settings: {
      size: 10,
      maxInt: 10,
      adding: true,
      subtracting: true,
      multiplication: false,
      division: false
    }
  }

  mainMenu = () => this.setState({ current: 0 })
  soloPlay = () => this.setState({ current: 1 })
  join = () => this.setState({ current: 2 })
  host = () => this.setState({ current: 3 })

  modes = [
    <Menu soloPlay={ this.soloPlay } />,
    <Game mainMenu={ this.mainMenu } soloPlay={ this.soloPlay } settings={ this.state.settings } />
  ]
  
  render() {
    return ( 
      <div>
        { this.modes[this.state.current] }
      </div>
     )
  }
}

export default App;
