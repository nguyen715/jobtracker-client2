import React from 'react';
import { Route } from 'react-router-dom';
import './Main.css';
import Welcome from '../Welcome/Welcome.js';
import PostList from '../PostList/PostList.js';
import NewPostForm from '../NewPostForm/NewPostForm.js';

function Main() {

  return (
    <div className="main">
      <Route exact path="/" component={Welcome}></Route>
      <Route path="/jobs/:token" component={PostList}></Route>
      <Route exact path="/jobs" component={PostList}></Route>
      <Route path="/create-post" component={NewPostForm}></Route>
    </div>
  )
};

export default Main;