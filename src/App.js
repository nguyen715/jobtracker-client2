import React, { Component } from 'react';
import './App.css';
import Context from './context/Context.js';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';

class App extends Component {

  state = {
    email: "",
    token: "",
    userPosts: [],

    setEmail: (email) => {
      this.setState({ email })
    },

    setToken: (token) => {
      this.setState({ token })
    },

    addPost: (newPost) => {
      this.setState({ userPosts: [...this.state.userPosts, newPost] })
    },

    removePost: (postId) => {
      const newPostArray = this.state.userPosts.filter(post => post.id !== postId)
      this.setState({ userPosts: newPostArray })
    },

    setPosts: (arrayOfPosts) => {
      this.setState({ userPosts: arrayOfPosts })
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
