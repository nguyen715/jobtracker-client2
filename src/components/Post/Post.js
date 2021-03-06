import React, { useContext } from 'react';
import Context from '../../context/Context.js';
import Api from '../../api/api-service.js';
import './Post.css';

export default function Post(props) {
  const context = useContext(Context);
  const lsEmail = window.localStorage.getItem('email');

  const shortenUrl = (urlString) => {
    if(urlString[4] === 's') {
      if(urlString.length > 39)
        return urlString.slice(8, 34) + "...";
      else
        return urlString.slice(8, 34);
    }
    else {
      if(urlString.length > 38)
        return urlString.slice(7, 33) + "...";
      else
        return urlString.slice(7, 33);
    }
  };

  const handleDeleteClick = (e) => {
    const postId = props.postId;

    Api.deletePostById(postId)
    .then(
      context.removePost(postId)
    );
  }

  return (
    <div className="post">
      <div className="field">
        <span className="label">Title: </span>
        <span className="data">{props.title}</span>
      </div>
      
      <div className="field">
        <span className="label">Location: </span>
        <span className="data">{props.location}</span>
      </div>
      
      <div className="field">
        <span className="label">URL: </span>
        <span className="data">
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.url && shortenUrl(props.url)}
          </a>
        </span>
      </div>
      
      <div className="field">
        <span className="label">Notes: </span>
        <span className="data">{props.notes}</span>
      </div>
      
      <div className="field">
        <span className="label">Rating: </span>
        <span className="data">{props.rating}</span>
      </div>
      
      {lsEmail && (
        <button className="delete-button" onClick={handleDeleteClick}>
          <img src={require('../../images/delete-button.png')} alt="delete button"></img>
        </button>
      )}
    </div>
  )
};