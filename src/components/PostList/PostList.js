import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Context from '../../context/Context.js';
import Api from '../../api/api-service.js';
import Post from '../Post/Post.js';
import './PostList.css';


export default function PostList() {
  const context = useContext(Context);
  const shareableLink = `https://jobtracker-rouge.vercel.app/jobs/${context.token}`;
  const { token } = useParams();
  const tokenVal = context.token || token;


  useEffect(() => {

    if(tokenVal) {
      Api.getPostsByToken(tokenVal)
      .then(res => res.json())
      .then(arrayOfPosts => context.setPosts(arrayOfPosts))
    }
  }, []);

  return (
    <>
      { context.email && (
        <>
          <div id="shareable-link">Shareable URL for your list: <a href={shareableLink} target="_blank" rel="noopener noreferrer">{shareableLink}</a></div>

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