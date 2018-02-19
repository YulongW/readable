import { api, headers } from './config';

export const getComments = (postId) => {
  const url = `${api}/posts/${postId}/comments`;

  return fetch(url, { headers })
    .then(res => res.json());
};

export const getComment = (id) => {
  const url = `${api}/comments/${id}`;

  return fetch(url, { headers })
    .then(res => res.json());
};

export const addComment = (comment) => {
  return fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  }).then(res => res.json())
};

export const deleteComment = (id) => {
  return fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers,
  }).then(res => res.json())
};

export const updateVote = (id, option) => {
  return fetch(`${api}/comments/${id}`, {
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
