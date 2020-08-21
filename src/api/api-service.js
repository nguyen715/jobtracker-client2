import config from '../config.js';

const getToken = (email) => {
  return fetch(`${config.BASE_URL}/token/${email}`);
}

const getPostsByEmail = (email) => {
  return fetch(`${config.BASE_URL}/posts/email/${email}`);
};

const getPostsByToken = (token) => {
  return fetch(`${config.BASE_URL}/posts/token/${token}`);
};

const createNewPost = (post) => {
  const options = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(post)
  }
  
  return fetch(`${config.BASE_URL}/posts/`, options);
};

const deletePostById = (postId) => {
  return fetch(`${config.BASE_URL}/posts/${postId}`, { method: "DELETE" })
};

export default {
  getToken,
  getPostsByEmail,
  getPostsByToken,
  createNewPost,
  deletePostById
}