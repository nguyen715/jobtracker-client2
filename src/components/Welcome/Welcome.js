import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Context from '../../context/Context.js';
import './Welcome.css';

export default function Welcome() {
  const context = useContext(Context);
  const [email, setEmail] = useState("");
  const [redirect, setRedirect] = useState(false);

  const renderRedirect = () => {
    if (redirect) {
      return (
        <Redirect to="/jobs" />
      )
    }

    else return null;
  }

  const emailChanged = (newEmail) => {
    setEmail(newEmail);
  }

  const handleSubmitClick = (e) => {
    e.preventDefault();

    context.setEmail(email);
    window.localStorage.setItem('email', email);
    setRedirect(true);

    // Api.getToken(email)
    // .then(res => {
    //   return res.json();
    // })
    // .then(data => {
    //   const token = data.token;
    //   context.setToken(token);
    //   context.setEmail(email);
    //   setRedirect(true);
    // })
  }

  return (
    <>
      {renderRedirect()}

      <div className="welcome">
        <p>Welcome to Jobtracker App! Use this app to keep track of job listings that you find during your job search. Enter your email address below to get started, and use the same email to come back to your saved list at any time.</p>

        <p>Happy job hunting!</p>

        <form action="" onSubmit={handleSubmitClick}>
          <label htmlFor="email">Enter your email address: </label>
          <input type="text" id="email" value={email} onChange={e => emailChanged(e.target.value)} required></input>
          <div className="btn-div">
            <button type="submit">View My Saved Jobs</button>
          </div>
        </form>
      </div>
    </>
  )
}