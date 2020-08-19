import config from '../config.js';

const getPostsByEmail = (email) => {
  fetch(`${config.BASE_URL}/posts?email=${email}`)
  .then(data => data.json());
};

const getPostsByToken = (token) => {
  fetch(`${config.BASE_URL}/?token=${token}`)
  .then(data => data.json());
};

const createNewPost = (post) => {
  const options = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(post)
  }
  
  fetch(`${config.BASE_URL}/posts/`, options)
}

const deletePostById = (postId) => {
  fetch(`${config.BASE_URL}/posts/${postId}`, { method: "DELETE" })
};

export default {
  getPostsByEmail,
  getPostsByToken,
  createNewPost,
  deletePostById
}