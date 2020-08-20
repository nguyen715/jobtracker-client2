import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../context/Context.js';
import Post from '../Post/Post.js';
import './PostList.css';


export default function PostList() {
  const context = useContext(Context);
  return (
    <>
      <Link to="/create-post">
        <button className="create-post-button">
          <img src={require('../../images/plus-button.png')} className="button-image" alt="create new post" />
        </button>
      </Link>

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