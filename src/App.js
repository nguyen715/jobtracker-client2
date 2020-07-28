import React, { Component } from 'react';
import './App.css';
import Context from './context/Context.js';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';

class App extends Component {
  state = {
    loggedIn: true,
    username: 'user11',
    changeUsername: (newName) => {
      this.setState({username: newName})
    },
    toggleLoggedIn: () => {
        this.setState({loggedIn: !this.state.loggedIn})
    }
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="App">
          <Header />
          <Main />
        </div>
      </Context.Provider>
    )
  }
}

export default App;
