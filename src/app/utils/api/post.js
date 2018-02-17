import { api, headers } from './config';

export const getPosts = (category) => {
  const url = category ? `${api}/${category}/posts` : `${api}/posts`;

  return fetch(url, { headers })
    .then(res => res.json());
};

export const getPost = (id) => {
  const url = `${api}/posts/${id}`;

  return fetch(url, { headers })
    .then(res => res.json());
};

export const addPost = (post) => {
  return fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json())
};

export const deletePost = (id) => {
  return fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers,
  }).then(res => res.json())
};

export const updateVote = (id, option) => {
  return fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json())
};

export const upVote = (id) => updateVote(id, 'upVote');
export const downVote = (id) => updateVote(id, 'downVote');
