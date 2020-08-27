import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Context from '../../context/Context.js';
import Api from '../../api/api-service.js';
import Post from '../Post/Post.js';
import './PostList.css';


export default function PostList() {
  const context = useContext(Context);
  const { token } = useParams();
  const [listCameIn, setListCameIn] = useState(false);
  const tokenVal = token || context.token;
  const emailVal = context.email || window.localStorage.getItem('email') || '';
  const shareableLink = context.token
                        ? `https://jobtracker-rouge.vercel.app/jobs/${context.token}`
                        : `Loading...`;

  useEffect(() => {
    if (token) {
      window.localStorage.clear();
    }

    if(emailVal.length > 0) {
      Api.getPostsByEmail(emailVal)
      .then(res => res.json())
      .then(arrayOfPosts => {
        context.setPosts(arrayOfPosts);
        setListCameIn(true);
      })
    }

    else if(tokenVal) {
      Api.getPostsByToken(tokenVal)
      .then(res => res.json())
      .then(arrayOfPosts => {
        context.setPosts(arrayOfPosts);
        setListCameIn(true);
      })
    }

    if(listCameIn && emailVal.length > 0) {
      Api.getToken(emailVal)
      .then(res => res.json())
      .then(data => {
        const token = data.token;
        window.localStorage.setItem('token', token);
        context.setToken(token);
      })
    }

    console.log(context.token);
  }, [listCameIn]);

  return (
    <>
      { emailVal && (
        <>
          <div id="shareable-link">
            <span>Shareable URL for your list: </span>
            <a href={shareableLink} target="_blank" rel="noopener noreferrer">{shareableLink}</a>
          </div>

          <Link to="/create-post">
            <button className="create-post-button">
              <img src={require('../../images/plus-button.png')} className="button-image" alt="create new post" />
            </button>
          </Link>
        </>
      )}

      <div className="post-list">
        {context.userPosts.map(post => {
          return (
            <Post 
              key={post.id}
              title={post.title}
              url={post.url}
              location={post.location}
              notes={post.notes}
              rating={post.rating}
              className="post"
              postId={post.id}
            />
          )})
        }
      </div>
    </>

  )
};