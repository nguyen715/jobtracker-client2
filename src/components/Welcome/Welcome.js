import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Context from '../../context/Context.js';
import Api from '../../api/api-service.js';
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
    const postsList = Api.getPostsByEmail(email);
    context.setPosts(postsList);
    setRedirect(true);
  }

  return (
    <>
      {renderRedirect()}

      <div className="welcome">
        <p>Welcome to Jobtracker App! This app is for helping you keep organized during your job search. As you search the internet on various job boards, when you find one that looks interesting, you can save it on this app and retrieve it later. On this page are brief instructions explaining how to use and make the most of the available features.</p>

        <p>To get started using the app, you first need to enter an email address in the box at the bottom of this page and then click on the button. You'll be taken to a page displaying all the job posts that you've previously saved under that email address. If you're a new user, the first time you enter it will be a blank page.</p>

        <p>On this job list page, you'll find a button that you can click to take you to a form where you can enter information for a new job post that you want to save. In the form, you can enter fields for the name of the job or job title, the URL of the listing, the location of the job e.g. San Francisco, remote, etc., and finally you can enter a personal rating for the listing between 1 and 10. Click the submit button and it should take you back to the main page where your new saved post should now show up in the list!</p>

        <p>In this job post you can view all the information that you saved, and you'll also find a red delete button in the corner to remove it from your saved posts. Be careful not to click it by mistake!</p>

        <p>There's one more feature that may come in handy for you. Towards the top of the page, you should find a special URL that always goes to your saved list of job posts connected to your email address. You can use this URL if you need to share your list with others but you don't want to share your email address. One important thing to note is that the job posts that you save should be considered publicly accessible data. Anyone with the special URL or your email address can view your saved job posts, so please keep that in mind.</p>

        <p>Happy Job Hunting!</p>

        <form action="" onSubmit={handleSubmitClick}>
          <label htmlFor="email">Enter your email address: </label>
          <input type="text" id="email" value={email} onChange={e => emailChanged(e.target.value)} required></input>
          <button type="submit">View My Saved Jobs</button>
        </form>
      </div>
    </>
  )
}