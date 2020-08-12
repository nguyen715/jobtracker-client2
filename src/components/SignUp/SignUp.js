import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Context from '../../context/Context.js';

export default function SignUp() {
  const context = useContext(Context);
  const [userData, setUserData] = useState({username:"", password:""});
  const [redirect, setRedirect] = useState(false);
  
  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to='/jobs' />
    }
  }

  const usernameChanged = (e) => {
    setUserData({
      username: e.target.value,
      password: userData.password
    })
  }

  const passwordChanged = (e) => {
    setUserData({
      username: userData.username,
      password: e.target.value
    })
  }

  const handleSubmitClick = (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        username: userData.username,
        password: userData.password
      })
    };
  
    fetch(`https://secure-caverns-29486.herokuapp.com/users`, options)
    .then(res => {
      if(!res.ok) {
        throw new Error('Something went wrong, please try again later.');
      }
      return res.json();
    })
    .then(data => {
      context.changeUsername(data.username);
      context.changeUserId(data.id);
      context.setLoggedInTrue();
    })
    .then(setRedirect(true));    
  }

  return (
    <>
      {renderRedirect()}

      <form id="sign-up-form" action="" onSubmit={handleSubmitClick}>
        <h2>Create a new account</h2>
        <label htmlFor="username">Enter a username: </label>
        <input id="username" onChange={usernameChanged}></input>
        <label htmlFor="password">Enter a password: </label>
        <input type="password" id="password" onChange={passwordChanged}></input>
        <button type="submit">Create My Account</button>
      </form>
    </>
  )
}