import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = 'patwreactreduxblog';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request,
  };
}

export const READ_POST = 'READ_POST';

export function readPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}?key=${API_KEY}`);

  return {
    type: READ_POST,
    payload: request,
  };
}

export const CREATE_POST = 'CREATE_POST';

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts?key=${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request,
  };
}
