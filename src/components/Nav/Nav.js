import React, { useContext } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import './Nav.css';
import Context from '../../context/Context.js';

export default function Nav() {

  const context = useContext(Context);
  const history = useHistory(History);
  
  const handleLogOut = () => {
    context.changeUsername('');
    context.toggleLoggedIn();
    history.push('/welcome');
  }
  
  const handleLogIn = (e) => {
    const username = e.target.value.username;
    const password = e.target.value.password;
    // send info to server, validate against database credentials
    // then, if valid, redirect to home page of app
    context.changeUsername(username);
    context.toggleLoggedIn();

    console.log('username: ' + context.username);

    return <Redirect to="/main" />
  }

  return (
    <div className="nav">
      {context.loggedIn &&
        <>
          <span className="username">Logged in as: {context.username}</span>
          <Link onClick={handleLogOut} to="/welcome" className="logout">Log out</Link>
          <Link to="/info" className="info">Information Page</Link>
          <Link to="/jobs" className="jobs">My Job List</Link>
        </>
      }

      {!context.loggedIn &&
        <>
          <Link to="/sign-up"><button>Sign Up</button></Link>
          <form className="log-in-form" action="" onSubmit={handleLogIn}>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="username">Password:</label>
            <input type="password" name="password" id="password" />
            <button type="submit">Log In</button>            
          </form>
        </>
      }
    </div>
  )
};
