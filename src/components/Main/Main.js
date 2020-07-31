import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import './Main.css';
import Context from '../../context/Context';
import Info from '../Info/Info.js';
import Welcome from '../Welcome/Welcome.js';
import PostList from '../PostList/PostList.js';
import NewPostForm from '../NewPostForm/NewPostForm.js';

function Main() {
  const context = useContext(Context);

  return (
    <div className="main">
      <Route path="/welcome" component={Welcome}></Route>
      <Route path="/info" component={Info}></Route>
      <Route path="/jobs" component={PostList}></Route>
      <Route path="/create-post" component={NewPostForm}></Route>
    </div>
  )
};

export default Main;