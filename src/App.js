import React, { Component } from 'react';
import './App.css';
import Context from './context/Context.js';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';

class App extends Component {

  state = {
    loggedIn: true,
    userId: 1,
    username: 'Minh',
    userPosts: [],

    changeUserId: (id) => {
      this.setState({user_id: id})
    },

    changeUsername: (newName) => {
      this.setState({username: newName})
    },
    
    toggleLoggedIn: () => {
        this.setState({loggedIn: !this.state.loggedIn})
    },

    addPost: (newPost) => {
      this.setState({userPosts: [...this.state.userPosts, newPost]})
    }
  }

  componentDidMount() {
    fetch(`http://localhost:8000/users/${this.state.userId}/posts`)
    .then(res => res.json())
    .then(posts => {
      this.setState({
        userPosts: posts
      })
    })
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
