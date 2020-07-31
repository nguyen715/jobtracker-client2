import React from 'react';
import './Post.css';

export default function Post(props) {
  return (
    <div className="post">
      <div className="">
        <span>Title: </span><span>{props.title}</span>
      </div>
      
      <div className="">
        <span>Location: </span><span>{props.location}</span>
      </div>
      
      <div className="">
        <span>URL: </span><span>{props.url}</span>
      </div>
      
      <div className="">
        <span>Notes: </span><div>{props.notes}</div>
      </div>
      
      <div className="">
        <span>Rating: </span><span>{props.rating}</span>
      </div>
      
      {/* optional edit and delete buttons, time permitting */}
    </div>
  )
};