import { 
  ADD_POST,
  RECEIVE_POSTS,
  RECEIVE_POST,
  UP_VOTE_POST,
  DOWN_VOTE_POST 
} from '../actions/post';

const initialState = {
  posts: []
}

function post(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return state;
    case RECEIVE_POSTS:
      return {
        ...state,
        posts: [...action.posts]
      }
    case RECEIVE_POST:
      return {
        ...state,
        posts: [].concat(action.post)
      }
    case UP_VOTE_POST:
      console.log(state);
      console.log(action);
      return {
        ...state,
        posts: [].concat(action.post).concat(
          state.posts.filter(post => action.post.id !== post.id)
        )
      }
    case DOWN_VOTE_POST:
      console.log(state);
      return {
        ...state,
        posts: [].concat(action.post).concat(
          state.posts.filter(post => action.post.id !== post.id)
        )
      }
    default:
      return state;
  }
}

export default post;