import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Context from '../../context/Context.js';
import './NewPostForm.css';


export default function NewPostForm() {
  const context = useContext(Context);
  const [post, setPost] = useState({title:"", url:"", location:"", notes:"", rating:"1", user_id:context.userId});
  const [redirect, setRedirect] = useState(false);

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to='/jobs' />
    }
  }

  const titleChanged = (newTitle) => {
    setPost({
      title: newTitle,
      url: post.url,
      location: post.location,
      notes: post.notes,
      rating: post.rating,
      user_id: post.user_id
    })
  };

  const urlChanged = (newUrl) => {
    setPost({
      title: post.title,
      url: newUrl,
      location: post.location,
      notes: post.notes,
      rating: post.rating,
      user_id: post.user_id
    })
  };

  const locationChanged = (newLocation) => {
    setPost({
      title: post.title,
      url: post.url,
      location: newLocation,
      notes: post.notes,
      rating: post.rating,
      user_id: post.user_id
    })
  };

  const notesChanged = (newNotes) => {
    setPost({
      title: post.title,
      url: post.url,
      location: post.location,
      notes: newNotes,
      rating: post.rating,
      user_id: post.user_id
    })
  };
  
  const ratingChanged = (newRating) => {
    setPost({
      title: post.title,
      url: post.url,
      location: post.location,
      notes: post.notes,
      rating: newRating,
      user_id: post.user_id
    })
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(post)
    }

    fetch(`http://localhost:8000/users/${context.userId}/posts`, options)
    .then(res => {
      if(!res.ok) {
        throw new Error('Something went wrong, please try again later.');
      }
      return res.json();
    })
    .then(data => {
      context.addPost(post);
    })
    .then(setRedirect(true));
  }

  return (
    <>
      {renderRedirect()}

      <form id="create-new-post" action="" onSubmit={handleSubmitClick}>
        <div>
          <label htmlFor="title">Title* </label>
          <input type="text"
                id="title"
                value={post.title}
                onChange={e => titleChanged(e.target.value)}
                required/>
        </div>

        <div>
          <label htmlFor="url">URL* </label>
          <input type="url"
                id="url"
                value={post.url}
                onChange={e => urlChanged(e.target.value)}
                required/>
        </div>
        
        <div>
          <label htmlFor="location">Location </label>
          <input type="text"
                id="location"
                value={post.location}
                onChange={e => locationChanged(e.target.value)}
          />
        </div>
        
        <div>
          <label htmlFor="notes">Notes </label>
          <textarea id="notes"
                    value={post.notes}
                    onChange={e => notesChanged(e.target.value)}>                
          </textarea>
        </div>
        
        <div>
          <label htmlFor="rating">Rating </label>
          <select id="rating"
                  value={post.rating}
                  onChange={e => ratingChanged(e.target.value)}
          >
            <option value="1" default>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  )
}