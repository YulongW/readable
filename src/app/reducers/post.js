import { 
  ADD_POST,
  RECEIVE_POSTS,
  RECEIVE_POST,
  UP_VOTE_POST,
  DOWN_VOTE_POST,
  SET_SORT_BY
} from '../actions/post';

const initialState = {
  posts: [],
  sortBy: 'timestamp'
}

function post(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat(action.post)
      }
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
      return {
        ...state,
        posts: [].concat(action.post).concat(
          state.posts.filter(post => action.post.id !== post.id)
        )
      }
    case DOWN_VOTE_POST:
      return {
        ...state,
        posts: [].concat(action.post).concat(
          state.posts.filter(post => action.post.id !== post.id)
        )
      }
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.sortBy
      }
    default:
      return state;
  }
}

export default post;
