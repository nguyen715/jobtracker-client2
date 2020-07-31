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
        <button className="create-post-button">Add New Post</button>
      </Link>
      {context.userPosts.map(post => {
        return (
          <Post 
            title={post.title}
            url={post.url}
            location={post.location}
            notes={post.notes}
            rating={post.rating}
          />
        )
      })}
    </>
    // <ul className="post-list">
    //   <li><Post title="" url="" location="" notes="" rating=""></Post></li>
    //   <li><Post></Post></li>
    //   <li><Post></Post></li>
    // </ul>
  )
};