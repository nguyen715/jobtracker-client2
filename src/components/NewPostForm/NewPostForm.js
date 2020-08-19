import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Context from '../../context/Context.js';
import Api from '../../api/api-service.js';
import './NewPostForm.css';


export default function NewPostForm() {
  const context = useContext(Context);
  const [post, setPost] = useState({title:"", url:"", location:"", notes:"", rating:"1", email:context.email});
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
      email: context.email
    })
  };

  const urlChanged = (newUrl) => {
    setPost({
      title: post.title,
      url: newUrl,
      location: post.location,
      notes: post.notes,
      rating: post.rating,
      email: context.email
    })
  };

  const locationChanged = (newLocation) => {
    setPost({
      title: post.title,
      url: post.url,
      location: newLocation,
      notes: post.notes,
      rating: post.rating,
      email: context.email
    })
  };

  const notesChanged = (newNotes) => {
    setPost({
      title: post.title,
      url: post.url,
      location: post.location,
      notes: newNotes,
      rating: post.rating,
      email: context.email
    })
  };
  
  const ratingChanged = (newRating) => {
    setPost({
      title: post.title,
      url: post.url,
      location: post.location,
      notes: post.notes,
      rating: newRating,
      email: context.email
    })
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();

    Api.createNewPost(post)
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
        <div className="field">
          <label htmlFor="title">Title* </label>
          <input type="text"
                id="title"
                value={post.title}
                onChange={e => titleChanged(e.target.value)}
                required/>
        </div>

        <div className="field">
          <label htmlFor="url">URL* </label>
          <input type="url"
                id="url"
                value={post.url}
                onChange={e => urlChanged(e.target.value)}
                required/>
        </div>
        
        <div className="field">
          <label htmlFor="location">Location </label>
          <input type="text"
                id="location"
                value={post.location}
                onChange={e => locationChanged(e.target.value)}
          />
        </div>
        
        <div className="field">
          <label htmlFor="notes">Notes </label>
          <textarea id="notes"
                    value={post.notes}
                    onChange={e => notesChanged(e.target.value)}>                
          </textarea>
        </div>
        
        <div className="field">
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

        <div className="button-field">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}